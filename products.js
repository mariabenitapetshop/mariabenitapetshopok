// Configuración de WhatsApp
const WHATSAPP_NUMBER = '5491123456789'; // Editar con el número real

// Productos con y sin variantes
const products = [
  {
    id: 1,
    name: 'Pro Plan Gatos',
    description: 'Alimento premium para gatos adultos con sabor a pollo',
    image: 'images/01excellent.jpeg',
    hasVariants: true,
    variants: [
      { size: '1 kg', price: 1200 },
      { size: '5 kg', price: 4500 },
      { size: '10 kg', price: 10000 }
    ]
  },
  {
    id: 2,
    name: 'Royal Canin Perros',
    description: 'Nutrición completa para perros adultos de razas pequeñas',
    image: 'images/02excellent.jpeg',
    hasVariants: true,
    variants: [
      { size: '2 kg', price: 1800 },
      { size: '7.5 kg', price: 5200 },
      { size: '15 kg', price: 9500 }
    ]
  },
  {
    id: 3,
    name: 'Eukanuba Cachorro',
    description: '',
    image: 'images/03excellent.jpeg',
    hasVariants: true,
    variants: [
      { size: '3 kg', price: 1500 },
      { size: '12 kg', price: 5000 }
    ]
  },
  {
    id: 4,
    name: 'Excellent Gatos Senior',
    description: 'Alimento balanceado para gatos mayores de 7 años',
    image: 'images/04excellent.jpeg',
    hasVariants: false,
    price: 950
  },
  {
    id: 5,
    name: 'Old Prince Perros',
    description: 'Nutrición premium con carne y vegetales naturales',
    image: 'images/05proplan.jpeg',
    hasVariants: true,
    variants: [
      { size: '1 kg', price: 850 },
      { size: '3 kg', price: 2200 },
      { size: '10 kg', price: 6500 }
    ]
  },
  {
    id: 6,
    name: 'Snacks Dental',
    description: 'Golosinas que ayudan a limpiar los dientes',
    image: 'images/06proplan.jpeg',
    hasVariants: false,
    price: 450
  },
  {
    id: 7,
    name: 'Vitaminas Masticables',
    description: 'Suplemento vitamínico en forma de golosina',
    image: 'images/07felix.jpeg',
    hasVariants: false,
    price: 680
  },
  {
    id: 8,
    name: 'Comida Húmeda Gatos',
    description: 'Paté nutritivo en lata, sabor a salmón',
    image: 'images/08nic.jpeg',
    hasVariants: true,
    variants: [
      { size: '85g (1 lata)', price: 280 },
      { size: '85g (6 latas)', price: 1500 }
    ]
  },
  {
    id: 9,
    name: 'Alimento Perros Sensibles',
    description: 'Fórmula especial para perros con digestión sensible',
    image: 'images/09generico.jpeg',
    hasVariants: true,
    variants: [
      { size: '3 kg', price: 1900 },
      { size: '10 kg', price: 5800 }
    ]
  },
  {
    id: 10,
    name: 'Juguete Interactivo',
    description: 'Juguete de goma resistente con sonido',
    image: 'https://via.placeholder.com/250x250/D0B8A0/FFFFFF?text=Juguete',
    hasVariants: false,
    price: 350
  }
];
