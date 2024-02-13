const translations = {
    ua: {
        name: "Марія Курчицька",
        summary: "Вітаю! Після короткого, але насиченого досвіду в управлінні продуктом та взаємодії з клієнтами я прийняла рішення поринути в світ веб-розробки в ролі Project Manager. Мої навички в оптимізації процесів та спілкуванні з клієнтами стануть міцним фундаментом для розвитку в новій сфері. Готова до нових викликів, відкрита для навчання і з нетерпінням чекаю можливості внести свій внесок у проекти в області веб-розробки.",
        city: "Київ, Україна",
        dates: {
            date1: "Січень 2023 - Дотепер",
            date2: "Червень 2023 - Вересень 2023",
            date3: "Листопад 2020 - Январь 2021",
            date4: "Грудень 2022 - Квітень 2023",
            date5: "Лютий 2020 - Листопад 2022",
            date6: "Вересень 2019 - Лютий 2020",
        },
        respons: "Додаткові обов'язки:",
        descr: {
            descr1: "Впровадила систему, яка забезпечила безперебійне виробництво навіть при відключенні електроенергії та усунула простої робочої сили;",
            descr2: "Перерозподілила ресурси та оптимізувала трудові процеси, що знизило кадрові витрати;",
            descr3: "Розробила і успішно впровадила систему KPI для кожного відділу, стимулюючи співробітників до досягнення високих планів продажів і виробництва;",
            descr4: "Переглянула контракти з поточними партнерами, змінивши умови співпраці, що призвело до збільшення обсягів продажів та поліпшення взаєморозуміння на рік вперед.",
            descr5: "Планування бюджету компанії на 2023 рік;",
            descr6: "Розрахунки обсягів виробництва та продажів на 2023 рік;",
            descr7: "Навчання та інтеграція нових/текучих співробітників;",
            descr8: "Розробка нового продукту для компанії.",
            descr9: "Успішно встановила міцні відносини з ключовими клієнтами, активно спілкуючись і оперативно реагуючи на виникаючі питання;",
            descr10: "Впровадила карту торгових точок для оптимізації роботи мерчендайзера, що підвищило привабливість продукції на полиці і призвело до збільшення обсягів продажів;",
            descr11: "Організовувала та проводила маркетингові заходи, спрямовані на привертання нових клієнтів і збір відгуків про продукцію.",
            descr12: "Управління запасами компанії;",
            descr13: "Формування звітів про стан відділу продажів;",
            descr14: "Управління бюджетами відділів продажів, закупівель і виробництва;",
            descr15: "Контроль і постановка завдань для виробничого відділу компанії.",
            descr16: "Здійснювала обробку замовлень для забезпечення своєчасної поставки продукції;",
            descr17: "Стежила за наявністю товарів і сировини, запобігаючи можливим простоям в постачаннях і виробництві;",
            descr18: "Активно брала участь у маркетингових заходах, спрямованих на привертання нових клієнтів;",
            descr19: "Здійснювала контроль за своєчасною звітністю відділів на кінець кожного місяця і забезпечувала швидкий переказ витрат відділів в фінансовий відділ."
        }, 
    },
    en:{
        name: "Maria Kurchitska",
        summary: "Hi there! After a short but rich experience in product management and customer interaction, I have decided to immerse myself in the world of web development as a Project Manager. My skills in process optimization and communication with clients will serve as a solid foundation for development in this new field. I am ready for challenges, open to learning, and eagerly await the opportunity to contribute to projects in the web development area.",
        city: "Kyiv, Ukraine",
        dates: {
            date1: "January 2023 - Present",
            date2: "June 2023 - September 2023",
            date3: "November 2020 - January 2021",
            date4: "December 2022 - April 2023",
            date5: "February 2020 - November 2022",
            date6: "September 2019 - February 2020",
        },
        respons: "Additional Responsibilities:",  
        descr: {
            descr1: "Implemented a system that ensured uninterrupted production even in the event of a power outage and eliminated downtime of the workforce;",
            descr2: "Redistributed resources and optimized work processes, resulting in reduced personnel expenses;",
            descr3: "Developed and successfully implemented a system of KPI for each department, motivating employees to achieve high sales and production targets;",
            descr4: "Reviewed contracts with current partners, modifying collaboration terms, leading to increased sales volumes and improved understanding for the next year.",
            descr5: "Budget planning for the company in 2023;",
            descr6: "Calculations of production and sales volumes for 2023;",
            descr7: "Training and integration of new/current employees;",
            descr8: "Development of a new product for the company.",
            descr9: "Successfully established strong relationships with key clients, actively engaging and promptly responding to emerging questions;",
            descr10: "Developed and successfully implemented a system of retail outlets to optimize the merchandiser's work, resulting in increased product attractiveness on the shelf and a boost in sales volumes;",
            descr11: "Organized and conducted marketing events aimed at attracting new customers and collecting feedback on products.",
            descr12: "Inventory management for the company;",
            descr13: "Compilation of reports on the sales department's status;",
            descr14: "Management of budgets for the sales, procurement and production departments;",
            descr15: "Oversight and task assignment for the company's production department.",
            descr16: "Processed orders to ensure timely product delivery.",
            descr17: "Monitored inventory levels of goods and raw materials, preventing potential delays in supply and production;",
            descr18: "Actively participated in marketing events aimed at attracting new customers;",
            descr19: "Controlled timely reporting of departments at the end of each month and ensured the prompt transfer of department expenses to the finance department."
        }, 
    }
};

function changeLanguage(lang) {
    document.querySelector(".header__name").innerText = translations[lang].name;
    document.querySelector(".info__summary").innerText = translations[lang].summary;
    document.querySelector(".info__city").innerText = translations[lang].city;

    for (let i = 1; i <= 6; i++) {
        document.getElementById(`date${i}`).innerText = translations[lang].dates[`date${i}`];
    };
    for (let i = 1; i <= 19; i++) {
        document.getElementById(`descr${i}`).innerText = translations[lang].descr[`descr${i}`];
    };

document.querySelectorAll(".respons").forEach(function(element) {
    element.innerText = translations[lang].respons;
});

};

function printPage() {
    window.print();
}