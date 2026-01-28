export const environmentComponent = (element) => {
    console.log(import.meta.env);

    const html = `
        Dev: ${import.meta.env.DEV} <br/>
        Developer name: ${import.meta.env.VITE_USERNAME} <br/>
        Database URL: ${import.meta.env.VITE_DATABASE_URL} <br/>
    `;
    element.innerHTML = html;
};
