// ========================================
// CONFIGURACIÓN
// ========================================

// EDITAR AQUÍ: Número de WhatsApp (sin + ni espacios)
const WHATSAPP_CONFIG = {
  number: '5491123456789', // Reemplazar con el número real
  countryCode: '+54'
};

// ========================================
// ESTADO DE LA APLICACIÓN
// ========================================

const appState = {
  selectedVariants: {}, // { productId: selectedVariantIndex }
  cart: [] // Array de items en el carrito
};

// ========================================
// FUNCIONES DEL CARRITO
// ========================================

/**
 * Agrega un producto al carrito
 */
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  let itemName = product.name;
  let itemPrice = product.price;

  // Si tiene variantes, obtener la seleccionada
  if (product.hasVariants) {
    const selectedIndex = appState.selectedVariants[productId] || 0;
    const selectedVariant = product.variants[selectedIndex];
    itemName += ` (${selectedVariant.size})`;
    itemPrice = selectedVariant.price;
  }

  // Agregar al carrito
  appState.cart.push({
    productId: product.id,
    name: itemName,
    price: itemPrice,
    quantity: 1
  });

  // Actualizar UI
  updateCartDisplay();
  showCartNotification(product.name);
}

/**
 * Elimina un item del carrito
 */
function removeFromCart(index) {
  appState.cart.splice(index, 1);
  updateCartDisplay();
}

/**
 * Actualiza la cantidad de un item
 */
function updateCartQuantity(index, quantity) {
  if (quantity <= 0) {
    removeFromCart(index);
  } else {
    appState.cart[index].quantity = quantity;
    updateCartDisplay();
  }
}

/**
 * Calcula el total del carrito
 */
function getCartTotal() {
  return appState.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

/**
 * Actualiza la visualización del carrito
 */
function updateCartDisplay() {
  const cartContainer = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const cartCount = document.getElementById('cart-count');
  const emptyMessage = document.getElementById('cart-empty');
  const checkoutBtn = document.getElementById('checkout-btn');

  if (!cartContainer) return;

  // Actualizar contador
  if (cartCount) {
    cartCount.textContent = appState.cart.length;
  }

  // Mostrar/ocultar mensaje vacío
  if (appState.cart.length === 0) {
    if (emptyMessage) emptyMessage.style.display = 'block';
    cartContainer.innerHTML = '';
    if (cartTotal) cartTotal.textContent = '$0';
    if (checkoutBtn) checkoutBtn.disabled = true;
    return;
  }

  if (emptyMessage) emptyMessage.style.display = 'none';
  if (checkoutBtn) checkoutBtn.disabled = false;

  // Renderizar items
  cartContainer.innerHTML = appState.cart.map((item, index) => `
    <div class="cart-item">
      <div class="cart-item-info">
        <h4>${escapeHTML(item.name)}</h4>
        <p class="cart-item-price">$${item.price.toLocaleString('es-AR')}</p>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn" onclick="updateCartQuantity(${index}, ${item.quantity - 1})">−</button>
        <input type="number" class="qty-input" value="${item.quantity}" onchange="updateCartQuantity(${index}, parseInt(this.value))" min="1">
        <button class="qty-btn" onclick="updateCartQuantity(${index}, ${item.quantity + 1})">+</button>
      </div>
      <div class="cart-item-total">
        <p>$${(item.price * item.quantity).toLocaleString('es-AR')}</p>
        <button class="remove-btn" onclick="removeFromCart(${index})">🗑️</button>
      </div>
    </div>
  `).join('');

  // Actualizar total
  const total = getCartTotal();
  if (cartTotal) {
    cartTotal.textContent = `$${total.toLocaleString('es-AR')}`;
  }
}

/**
 * Muestra notificación al agregar producto
 */
function showCartNotification(productName) {
  const notification = document.createElement('div');
  notification.className = 'cart-notification';
  notification.textContent = `✓ ${productName} agregado al carrito`;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add('show');
  }, 10);

  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 2000);
}

/**
 * Envía el carrito por WhatsApp
 */
function checkoutCart() {
  if (appState.cart.length === 0) {
    alert('El carrito está vacío');
    return;
  }

  // Construir mensaje
  let message = '🛒 *Pedido desde María Benita*\n\n';
  message += '*Detalle del pedido:*\n';
  message += '─────────────────\n';

  appState.cart.forEach((item, index) => {
    message += `${index + 1}. ${item.name}\n`;
    message += `   Cantidad: ${item.quantity}\n`;
    message += `   Precio unitario: $${item.price.toLocaleString('es-AR')}\n`;
    message += `   Subtotal: $${(item.price * item.quantity).toLocaleString('es-AR')}\n\n`;
  });

  message += '─────────────────\n';
  const total = getCartTotal();
  message += `*TOTAL: $${total.toLocaleString('es-AR')}*\n\n`;
  message += 'Por favor confirmar disponibilidad y horario de entrega.';

  // Codificar el mensaje para URL
  const encodedMessage = encodeURIComponent(message);

  // Construir URL de WhatsApp
  const whatsappURL = `https://wa.me/${WHATSAPP_CONFIG.number}?text=${encodedMessage}`;

  // Abrir en nueva pestaña
  window.open(whatsappURL, '_blank');

  // Limpiar carrito después de enviar
  setTimeout(() => {
    appState.cart = [];
    updateCartDisplay();
  }, 500);
}

// ========================================
// FUNCIONES DE PRODUCTOS
// ========================================

/**
 * Renderiza todos los productos en la grilla
 */
function renderProducts() {
  const grid = document.getElementById('products-grid');

  if (!grid) {
    console.error('No se encontró el elemento #products-grid');
    return;
  }

  grid.innerHTML = '';

  products.forEach((product, index) => {
    const card = createProductCard(product);
    grid.appendChild(card);
  });
}

/**
 * Crea una tarjeta de producto
 */
function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.dataset.productId = product.id;

  // Imagen
  const imageHTML = `
    <img 
      src="${product.image}" 
      alt="${product.name}" 
      class="product-image"
      onerror="this.src='https://via.placeholder.com/250x250/D4A574/FFFFFF?text=Imagen+no+disponible'"
    >
  `;

  // Contenido
  let contentHTML = `
    <div class="product-content">
      <h3 class="product-name">${escapeHTML(product.name)}</h3>
      <p class="product-description">${escapeHTML(product.description)}</p>
  `;

  // Variantes o precio fijo
  if (product.hasVariants) {
    contentHTML += createVariantsHTML(product);
  } else {
    contentHTML += `
      <div class="product-price">
        <span class="price-currency">$</span>${product.price.toLocaleString('es-AR')}
      </div>
    `;
  }

  // Botón Agregar al Carrito
  contentHTML += `
    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
      <span>🛒</span>
      <span>Agregar al carrito</span>
    </button>
  `;

  contentHTML += '</div>';

  card.innerHTML = imageHTML + contentHTML;
  return card;
}

/**
 * Crea el HTML para las variantes
 */
function createVariantsHTML(product) {
  const variantId = `variant-${product.id}`;
  let html = `
    <div class="variants-section">
      <label class="variant-label" for="${variantId}">Selecciona tamaño:</label>
      <select id="${variantId}" class="variant-select" onchange="updatePrice(${product.id})">
  `;

  product.variants.forEach((variant, index) => {
    html += `
      <option value="${index}">
        ${escapeHTML(variant.size)} - $${variant.price.toLocaleString('es-AR')}
      </option>
    `;
  });

  html += `
      </select>
    </div>
    <div class="product-price">
      <span class="price-currency">$</span><span id="price-${product.id}">${product.variants[0].price.toLocaleString('es-AR')}</span>
    </div>
  `;

  return html;
}

/**
 * Actualiza el precio cuando cambia la variante
 */
function updatePrice(productId) {
  const product = products.find(p => p.id === productId);
  if (!product || !product.hasVariants) return;

  const selectElement = document.getElementById(`variant-${productId}`);
  const selectedIndex = parseInt(selectElement.value);
  const selectedVariant = product.variants[selectedIndex];

  // Guardar selección en el estado
  appState.selectedVariants[productId] = selectedIndex;

  // Actualizar precio mostrado
  const priceElement = document.getElementById(`price-${productId}`);
  if (priceElement) {
    priceElement.textContent = selectedVariant.price.toLocaleString('es-AR');
  }
}

/**
 * Escapa caracteres HTML para evitar inyecciones
 */
function escapeHTML(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ========================================
// FUNCIONES DE UI
// ========================================

/**
 * Abre/cierra el carrito lateral
 */
function toggleCart() {
  const cartSidebar = document.getElementById('cart-sidebar');
  const cartOverlay = document.getElementById('cart-overlay');

  if (!cartSidebar || !cartOverlay) return;

  cartSidebar.classList.toggle('open');
  cartOverlay.classList.toggle('open');
}

// ========================================
// INICIALIZACIÓN
// ========================================

/**
 * Inicializa la aplicación cuando el DOM está listo
 */
document.addEventListener('DOMContentLoaded', function() {
  console.log('Inicializando María Benita Catalog...');

  // Validar que exista el array de productos
  if (typeof products === 'undefined' || !Array.isArray(products)) {
    console.error('Error: products.js no se cargó correctamente');
    return;
  }

  // Renderizar productos
  renderProducts();

  // Inicializar carrito
  updateCartDisplay();

  console.log(`✓ ${products.length} productos cargados`);
  console.log('✓ Catálogo listo');
});

// ========================================
// UTILIDADES
// ========================================

/**
 * Cambia el número de WhatsApp (para testing)
 */
function updateWhatsAppNumber(newNumber) {
  WHATSAPP_CONFIG.number = newNumber;
  console.log(`✓ Número de WhatsApp actualizado a: ${newNumber}`);
}

/**
 * Obtiene información del producto
 */
function getProductInfo(productId) {
  return products.find(p => p.id === productId);
}

/**
 * Obtiene todos los productos
 */
function getAllProducts() {
  return products;
}

/**
 * Obtiene el carrito actual
 */
function getCart() {
  return appState.cart;
}

/**
 * Cuenta productos con variantes
 */
function countProductsWithVariants() {
  return products.filter(p => p.hasVariants).length;
}

// ========================================
// LOGS Y DEBUGGING
// ========================================

// Mostrar información en la consola
console.log('%c🐾 María Benita Catalog', 'font-size: 16px; color: #8B6F47; font-weight: bold;');
console.log('%cCatálogo interactivo con carrito de compras', 'color: #A8B89F; font-size: 12px;');
console.log(`%cProductos cargados: ${products.length}`, 'color: #25D366; font-size: 12px;');
console.log(`%cProductos con variantes: ${countProductsWithVariants()}`, 'color: #25D366; font-size: 12px;');
console.log(`%cNúmero WhatsApp: ${WHATSAPP_CONFIG.number}`, 'color: #25D366; font-size: 12px;');
console.log('%cComandos disponibles:', 'color: #8B6F47; font-weight: bold;');
console.log('  addToCart(productId) - Agregar producto al carrito');
console.log('  removeFromCart(index) - Eliminar item del carrito');
console.log('  getCart() - Ver carrito actual');
console.log('  checkoutCart() - Enviar carrito por WhatsApp');
console.log('  updateWhatsAppNumber(number) - Cambiar número de WhatsApp');
