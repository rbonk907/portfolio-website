const scrollTo = (id) => {
    const element = document.getElementById(id);
    // const headerOffset = 50;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset;
    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

export default scrollTo;

