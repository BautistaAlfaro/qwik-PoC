

export interface Item {
    id: number;
    name: string;
}

let items: Item[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
    { id: 6, name: 'Item 6' },
    { id: 7, name: 'Item 7' },
    { id: 8, name: 'Item 8' },
    { id: 9, name: 'Item 9' },
    { id: 10, name: 'Item 10' },
];

export const getItems = () => items;

export const getItem = (id: number) => items.find(item => item.id === id);

export const createItem = (name: string) => {
    const newItem = {id: items.length + 1, name};
    items.push(newItem);
    return newItem;
};

export const updateItem = (id: number, name: string) => {
    const item = getItem(id);
    if (item) {
        item.name = name;
        return item;
    }
    return null;
};

export const deleteItem = (id: number) => {
    items = items.filter(item => item.id !== id);
}

