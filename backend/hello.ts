// backend/hello.ts
export default (props) => {
    return `Hello, ${props.name || 'World'}!`;
};

export const GET = (props) => {
    return `Hello, ${props.name || 'World'} via GET!`;
};

export const POST = (props) => {
    return `Hello, ${props.name || 'World'} via POST!`;
};