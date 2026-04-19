// Configuración de WhatsApp
const WHATSAPP_NUMBER = '5491123456789'; // Editar con el número real

// Productos con y sin variantes
const products = [
  {
    id: 1,
    name: 'Excellent gato adulto',
    description: '',
    image: 'images/01excellent.jpeg',
    hasVariants: true,
    variants: [
      { size: '3 kg', price: 29223 },
      { size: '7,5 kg', price: 62947 },
      { size: '15 kg', price: 121445 }
    ]
  },
  {
    id: 2,
    name: 'Excellent gato mantenimiento',
    description: '',
    image: 'images/02excellent.jpeg',
    hasVariants: false,
    price: 5200
  },
  {
    id: 3,
    name: 'Excellent perro mordida pequena',
    description: '',
    image: 'images/03excellent.jpeg',
    hasVariants: true,
    variants: [
      { size: '3 kg', price: 18594 },
      { size: '15 kg', price: 72936 }
    ]
  },
  {
    id: 4,
    name: 'Excellent perro mantenimiento',
    description: '',
    image: 'images/04excellent.jpeg',
    hasVariants: false,
    price: 59063
  },
  {
    id: 5,
    name: 'Pro Plan perro adulto mordida pequena',
    description: '',
    image: 'images/05proplan.jpeg',
    hasVariants: true,
    variants: [
      { size: '3 kg', price: 36439 },
      { size: '7,5 kg', price: 73992 }
    ]
  },
  {
    id: 6,
    name: 'Pro Plan perro adulto mordida grande',
    description: '',
    image: 'images/06proplan.jpeg',
    hasVariants: true,
    variants: [
      { size: '3 kg', price: 34833 },
      { size: '15 kg', price: 110558 }
    ]
  },
  {
    id: 7,
    name: 'Felix x 15 sobres',
    description: '',
    image: 'images/07felix.jpeg',
    hasVariants: false,
    price: 22800
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
