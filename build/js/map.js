document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector('#map')) {
        ymaps.ready(init);

        function init() {
            // Создаем SVG-иконку
            var svgIcon = `<svg width="28" height="34" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0003 0.422852C6.63653 0.422852 0.666992 6.39239 0.666992 13.7562C0.666992 17.2963 2.04669 20.5143 4.2977 22.9016L14.0003 33.7562L23.7029 22.9016C25.954 20.5143 27.3337 17.2963 27.3337 13.7562C27.3337 6.39239 21.3641 0.422852 14.0003 0.422852Z" fill="url(#paint0_linear_148_7594)"/>
<path d="M14.0003 18.7562C16.7617 18.7562 19.0003 16.5176 19.0003 13.7562C19.0003 10.9948 16.7617 8.75619 14.0003 8.75619C11.2389 8.75619 9.00033 10.9948 9.00033 13.7562C9.00033 16.5176 11.2389 18.7562 14.0003 18.7562Z" fill="url(#paint1_linear_148_7594)"/>
<defs>
<linearGradient id="paint0_linear_148_7594" x1="0.666992" y1="0.422852" x2="27.7673" y2="0.7792" gradientUnits="userSpaceOnUse">
<stop stop-color="#CF080F"/>
<stop offset="1" stop-color="#B20E24"/>
</linearGradient>
<linearGradient id="paint1_linear_148_7594" x1="0.666992" y1="0.422852" x2="27.7673" y2="0.7792" gradientUnits="userSpaceOnUse">
<stop stop-color="#CF080F"/>
<stop offset="1" stop-color="#B20E24"/>
</linearGradient>
</defs>
</svg>
`;

            // Создаем карту
            var myMap = new ymaps.Map("map", {
                center: [61.247089, 73.519291], // Москва
                zoom: 13,
                controls: []
            }, {
                // Устанавливаем черно-белую палитру
                geoObjectOpenBalloonIconLayout: "default#image",
                suppressMapOpenBlock: true
            });


            // Создаем метку с SVG-иконкой
            var myPlacemark = new ymaps.Placemark([61.247089, 73.519291], {}, {
                iconLayout: 'default#image',
                iconImageHref: 'data:image/svg+xml;base64,' + btoa(svgIcon),
                iconImageSize: [26, 33],
                iconImageOffset: [-13, -33]
            });

            // Добавляем метку на карту
            myMap.geoObjects.add(myPlacemark);
        }
    }
})