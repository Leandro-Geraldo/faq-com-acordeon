const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        const itemAtivo = document.querySelector(".active")
        if(itemAtivo){
            itemAtivo.classList.remove("active")
        }
        faq.classList.add("active")
    })
});
