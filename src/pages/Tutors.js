import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllTutors, searchTutors } from '../data/tutors';
import './Tutors.css';
import '../components/TutorsSection.css';

function TutorCard({ tutor }) {
  return (
    <Link to={`/tutor/${tutor.id}`} className="tutor-card-link">
      <div className="tutor-card">
        <div className="card-header" style={{ backgroundColor: tutor.color }}>
          <h3>{tutor.skill}</h3>
        </div>
        <div className="card-body">
          <h2>{tutor.name}</h2>
          <div className="rating-exp">
            <span>⭐ {tutor.rating}</span>
            <span>• {tutor.experience} yrs</span>
          </div>
        </div>
        <div className="card-footer">
          <div className="info-item">📍 {tutor.location}</div>
          <div className="info-item">💰 {tutor.price}</div>
        </div>
      </div>
    </Link>
  );
}

function useFilterData() {
  const all = useMemo(() => getAllTutors(), []);
  const skills = useMemo(() => {
    const set = new Set(all.map(t => t.category));
    return ['All', ...Array.from(set)];
  }, [all]);
  const locations = useMemo(() => {
    const set = new Set(all.map(t => t.location));
    return ['All', ...Array.from(set).sort()];
  }, [all]);
  return { all, skills, locations };
}

const PAGE_SIZE = 24;

export default function Tutors() {
  const { skills, locations } = useFilterData();

  const [q, setQ] = useState('');
  const [skill, setSkill] = useState('All');
  const [location, setLocation] = useState('All');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => searchTutors({ q, skill, location }), [q, skill, location]);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageStart = (page - 1) * PAGE_SIZE;
  const pageData = filtered.slice(pageStart, pageStart + PAGE_SIZE);

  const onSearchChange = (e) => {
    setQ(e.target.value);
    setPage(1);
  };
  const onSkillChange = (e) => {
    setSkill(e.target.value);
    setPage(1);
  };
  const onLocationChange = (e) => {
    setLocation(e.target.value);
    setPage(1);
  };

  const goto = (p) => {
    if (p < 1 || p > totalPages) return;
    setPage(p);
  };

  return (
    <div className="tutors-page">
      <div className="tutors-hero">
        <h1>Browse Tutors</h1>
        <p>Search 1500+ verified tutors across academic, tech, music, languages, fitness, arts, and more.</p>
      </div>

      <div className="filters">
        <input
          type="text"
          value={q}
          onChange={onSearchChange}
          placeholder="Search by name, skill, category or location..."
          className="search-input"
        />
        <select value={skill} onChange={onSkillChange} className="select-input">
          {skills.map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <select value={location} onChange={onLocationChange} className="select-input">
          {locations.map(l => (
            <option key={l} value={l}>{l}</option>
          ))}
        </select>
      </div>

      <div className="results-info">
        <span>{filtered.length} tutors found</span>
      </div>

      <div className="tutors-grid">
        {pageData.map(t => (
          <TutorCard key={t.id} tutor={t} />
        ))}
      </div>

      <div className="pagination">
        <button onClick={() => goto(page - 1)} disabled={page === 1}>Prev</button>
        <span>Page {page} / {totalPages}</span>
        <button onClick={() => goto(page + 1)} disabled={page === totalPages}>Next</button>
      </div>
    </div>
  );
}
