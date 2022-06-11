import Block from '../view/block';

export const renderDom = (query: string, block: Block) => {
    const root = document.querySelector(query) as HTMLElement;
    root.innerHTML = '';
    root.appendChild(block.getContent());
    return root;
};
