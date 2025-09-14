const CHECK_GUESS_TIMER = 3000;

document.addEventListener("DOMContentLoaded", function () {

    const checkGuess = () => {

        const productsContainer = document.getElementById("products_container");
        const guessInput = document.getElementById("guess_input");
        const messageEl = document.getElementById("message");
        const scoreEl = document.getElementById("score");

        const userGuess = parseFloat(guessInput.value);

        // Проверяем, введено ли число
        if (isNaN(userGuess)) {
            messageEl.textContent = "Пожалуйста, введите число!";
            messageEl.className = "message error";
            return;
        }

        // Вычисляем разницу между догадкой и реальной ценой
        const difference = Math.abs(userGuess - currentProduct.price);
        let points = 0;

        // Определяем количество очков в зависимости от точности
        if (difference <= 5) {
            points = 10;
            messageEl.textContent = `Отлично! Вы угадали с точностью до 5 рублей! +${points} очков`;
            messageEl.className = "message success";
        } else if (difference <= 15) {
            points = 5;
            messageEl.textContent = `Хорошо! Разница всего ${difference.toFixed(
                2
            )} рублей. +${points} очков`;
            messageEl.className = "message hint";
        } else {
            messageEl.textContent = `Попробуйте ещё! Разница: ${difference.toFixed(
                2
            )} рублей. Реальная цена: ${currentProduct.price} руб.`;
            messageEl.className = "message error";
        }

        // Обновляем счет
        score += points;
        scoreEl.textContent = score;

        // Показываем реальную цену
        const productCostEl =
            productsContainer.querySelector(".product-cost");
        productCostEl.textContent = `${currentProduct.price.toFixed(2)} ₽`;
        productCostEl.style.color = "#27ae60";

        // Через 2 секунды показываем новый продукт
        setTimeout(startNewGuess, CHECK_GUESS_TIMER);
    };

    const guessInput = document.getElementById("guess_input");
    const guessBtn = document.getElementById("guess_btn");

    let currentProduct = null;
    let score = 0;

    const startNewGuess = () => {
        currentProduct = displayRandomProduct();
    }

    startNewGuess()

    // Обработчик события для кнопки
    guessBtn.addEventListener("click", checkGuess);

    // Обработчик события для клавиши Enter
    guessInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            checkGuess();
        }
    });
})