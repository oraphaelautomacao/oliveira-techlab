/* ==================================================
   OLIVEIRA TECHLAB — JAVASCRIPT
   ================================================== */

"use strict";

// Marca que o JavaScript está ativo. As animações só ocultam elementos
// quando este arquivo foi carregado corretamente.
document.documentElement.classList.add("js");

// Atualiza automaticamente o ano do rodapé.
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Anima os elementos conforme eles entram na área visível da tela.
// Se IntersectionObserver não estiver disponível, deixa tudo visível.
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            });
        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });
} else {
    revealElements.forEach((element) => {
        element.classList.add("visible");
    });
}
