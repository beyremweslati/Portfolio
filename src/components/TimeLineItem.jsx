const TimelineItem = ({ org, role, context, date, points = [], skills = [] }) => (
  <li className="timeline-item">
    <span className="timeline-dot" aria-hidden="true" />
    <p className="timeline-date">{date}</p>
    <h3>{org}</h3>
    <p className="timeline-role">{role}</p>
    {context && <p className="timeline-context">{context}</p>}
    {points.length > 0 && (
      <ul className="timeline-points">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    )}
    {skills.length > 0 && <p className="timeline-skills">{skills.join(" / ")}</p>}
  </li>
);

export default TimelineItem;
