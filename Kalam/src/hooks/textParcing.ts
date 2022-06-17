export function newLineText(contentToSplit: String) {
    const text = contentToSplit;
    const newText = text.split('\n');

    return newText;
}