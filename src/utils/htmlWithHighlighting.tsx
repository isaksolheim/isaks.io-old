export function createHtmlWithHighlighting(
  html: string,
  startOfCodeSnippets: number[],
  endOfCodeSnipptes: number[]
) {
  let htmlWithHighlighting = '';

  const str = html.substr(0, startOfCodeSnippets[0] - 38);
  htmlWithHighlighting += str;

  for (let i = 0; i < startOfCodeSnippets.length; i++) {
    const code = `<deckgo-highlight-code>
        <code slot='code'>
          ${html.substr(startOfCodeSnippets[i], endOfCodeSnipptes[i])}
        </code>
      </deckgo-highlight-code>`;

    htmlWithHighlighting += code;

    if (i < startOfCodeSnippets.length - 1) {
      htmlWithHighlighting += html.substr(
        startOfCodeSnippets[i] + endOfCodeSnipptes[i] + 13,
        startOfCodeSnippets[i + 1] -
          (startOfCodeSnippets[i] + endOfCodeSnipptes[i]) -
          51
      );
    } else {
      htmlWithHighlighting += html.substr(
        getEndOfLastCodeSnippet(startOfCodeSnippets, endOfCodeSnipptes) + 17,
        html.length
      );
    }
  }

  return htmlWithHighlighting;
}

function getEndOfLastCodeSnippet(
  startOfCodeSnippets: number[],
  endOfCodeSnipptes: number[]
) {
  let endOfLastCodeSnippet = 0;

  endOfLastCodeSnippet +=
    startOfCodeSnippets[startOfCodeSnippets.length - 1] +
    endOfCodeSnipptes[endOfCodeSnipptes.length - 1];

  return endOfLastCodeSnippet;
}
