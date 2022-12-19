/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	alert('Алиса, надо сказать, частенько давала себе очень разумные советы, но довольно редко следовала им')
})

<style type="text/css">
img { opacity:.25; }
img:hover { opacity:1; }
</style>