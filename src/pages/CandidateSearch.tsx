import { useState, useEffect, useCallback } from 'react';

import { searchGithub, searchGithubUser } from '../api/API';
import CandidateCard from '../components/CandidateCard';
import type { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [results, setResults] = useState<Candidate[]>([]);
  const [currentUser, setCurrentUser] = useState<Candidate>({
    id: null,
    login: null,
    email: null,
    html_url: null,
    name: null,
    bio: null,
    company: null,
    location: null,
    avatar_url: null,
  });
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  const searchForSpecificUser = useCallback(async (user: string) => {
    try {
      const data: Candidate = await searchGithubUser(user);
      setCurrentUser(data);
    } catch (error) {
      console.error(`Error fetching user ${user}:`, error);
      setCurrentUser({
        id: null,
        login: null,
        email: null,
        html_url: null,
        name: null,
        bio: null,
        company: null,
        location: null,
        avatar_url: null,
      });
    }
  }, []);

  const searchForUsers = useCallback(async () => {
    try {
      const data: Candidate[] = await searchGithub();
      if (!data || data.length === 0) {
        console.error('No candidates returned by API');
        setResults([]);
        setCurrentUser({
          id: null,
          login: null,
          email: null,
          html_url: null,
          name: null,
          bio: null,
          company: null,
          location: null,
          avatar_url: null,
        });
        return;
      }
      setResults(data);
      await searchForSpecificUser(data[0].login || '');
    } catch (error) {
      console.error('Error fetching users:', error);
      setResults([]);
    }
  }, [searchForSpecificUser]);

  useEffect(() => {
    searchForUsers();
  }, [searchForUsers]);

  const makeDecision = async (isSelected: boolean) => {
    if (isSelected) {
      let parsedCandidates: Candidate[] = [];
      const savedCandidates = localStorage.getItem('savedCandidates');
      if (typeof savedCandidates === 'string') {
        parsedCandidates = JSON.parse(savedCandidates);
      }
      parsedCandidates.push(currentUser);
      localStorage.setItem('savedCandidates', JSON.stringify(parsedCandidates));
    }
    if (currentIdx + 1 < results.length) {
      setCurrentIdx(currentIdx + 1);
      await searchForSpecificUser(results[currentIdx + 1]?.login || '');
    } else {
      console.log('No more candidates. Restarting search.');
      setCurrentIdx(0);
      await searchForUsers();
    }
  };

  return (
    <>
      <h1>Candidate Search</h1>
      {currentUser.login ? (
        <CandidateCard currentUser={currentUser} makeDecision={makeDecision} />
      ) : (
        <h2>No candidates available. Please try again later.</h2>
      )}
    </>
  );
};

export default CandidateSearch;
