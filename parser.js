const elements = document.querySelectorAll('.chakra-link');

function parseProduct(doc) {

    // Извлекаем название товара - используем селектор по itemprop="name"
    const titleElement = doc.querySelector('[itemprop="name"]');
    const title = titleElement ? titleElement.textContent.trim() : null;

    // Извлекаем цену (используем атрибут content элемента с itemprop="price")
    const priceElement = doc.querySelector('[itemprop="price"]');
    let price = null;

    if (priceElement) {
        // Пытаемся получить цену из атрибута content
        const priceContent = priceElement.getAttribute('content');
        if (priceContent) {
            price = parseFloat(priceContent);
        } else {
            // Если content нет, пробуем извлечь из текста
            const priceText = priceElement.textContent.trim();
            price = parseFloat(priceText.replace(',', '.')); // Заменяем запятую на точку
        }
    }

    return {
        title: title,
        price: price
    };
}

const infos = [];

// Iterate over the found elements (example)
elements.forEach(element => {
    if (!element.className.includes("productCard")) {
        return
    }
    const product_info = parseProduct(element);
    infos.push(product_info)
});

console.log(infos)