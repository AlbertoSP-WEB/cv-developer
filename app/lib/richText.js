const richPattern = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|`([^`]+)`/g;

function renderSegment(text, keyPrefix) {
  return text.split("\n").flatMap((part, i, arr) => {
    const nodes = part ? [<span key={`${keyPrefix}-t${i}`}>{part}</span>] : [];
    if (i < arr.length - 1) nodes.push(<br key={`${keyPrefix}-br${i}`} />);
    return nodes;
  });
}

// Parses "[label](url)" links, "**bold**" text, "`code`" spans and "\n" line breaks inside a string into React nodes.
export function renderRichText(text) {
  const nodes = [];
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = richPattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(...renderSegment(text.slice(lastIndex, match.index), `s${key}`));
    }
    if (match[1] !== undefined) {
      nodes.push(
        <a
          key={`a${key}`}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 font-semibold underline"
        >
          {match[1]}
        </a>
      );
    } else if (match[3] !== undefined) {
      nodes.push(
        <strong key={`b${key}`} className="font-bold">
          {match[3]}
        </strong>
      );
    } else {
      nodes.push(
        <code
          key={`c${key}`}
          className="font-mono text-[0.9em] bg-slate-100 px-1 py-0.5 rounded"
        >
          {match[4]}
        </code>
      );
    }
    lastIndex = richPattern.lastIndex;
    key += 1;
  }
  if (lastIndex < text.length) {
    nodes.push(...renderSegment(text.slice(lastIndex), `s${key}`));
  }
  return nodes;
}
