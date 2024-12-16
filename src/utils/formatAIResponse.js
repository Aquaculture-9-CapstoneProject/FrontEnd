export default function formatAIResponse(text) {
    text = text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>'); // Bold
    text = text.replace(/\*(.*?)\*/g, '<i>$1</i>'); // Italic
  
    const lines = text.split('\n');
    let formattedText = '';
    let inList = false;
  
    lines.forEach((line) => {
      line = line.trim();
  
      if (line.endsWith(':')) {
        if (inList) {
          formattedText += '</ul>';
          inList = false;
        }
        if (formattedText !== '') {
          formattedText += '<br>';
        }
        formattedText += `<p>${line}</p>`;
      } else if (line.startsWith('* ') || /^[0-9]+[.)]\s/.test(line)) {
        if (!inList) {
          formattedText += '<ul>';
          inList = true;
        }
        formattedText += `<li>${line.replace(/^\* |^[0-9]+[.)]\s/, '')}</li>`;
      } else if (line) {
        if (inList) {
          formattedText += '</ul>';
          inList = false;
        }
        if (formattedText !== '') {
          formattedText += '<br>';
        }
        formattedText += `<p>${line}</p>`;
      }
    });
  
    if (inList) {
      formattedText += '</ul>';
    }
  
    return formattedText;
  }
  