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
      { size: '3 kg', price: 26775 },
      { size: '7,5 kg', price: 57705 },
      { size: '15 kg', price: 111355 }
    ]
  },
  {
    id: 2,
    name: 'Excellent gato mantenimiento',
    description: '',
    image: 'images/02excellent.jpeg',
    hasVariants: true,
    variants: [
     { size: '15 kg', price: 77310 }
    ]
  },
  {
    id: 3,
    name: 'Excellent perro mordida pequena',
    description: '',
    image: 'images/03excellent.jpeg',
    hasVariants: true,
    variants: [
      { size: '3 kg', price: 17049 },
      { size: '15 kg', price: 66783 }
    ]
  },
  {
    id: 4,
    name: 'Excellent perro mantenimiento',
    description: '',
    image: 'images/04excellent.jpeg',
    hasVariants: true,
    variants: [
       { size: '15 kg', price: 58145 }
    ]
  },
  {
    id: 5,
    name: 'Pro Plan perro adulto mordida pequena',
    description: '',
    image: 'images/05proplan.jpeg',
    hasVariants: true,
    variants: [
      { size: '3 kg', price: 30986 },
      { size: '7,5 kg', price: 67829 }
    ]
  },
  {
    id: 6,
    name: 'Pro Plan perro adulto mordida grande',
    description: '',
    image: 'images/06proplan.jpeg',
    hasVariants: true,
    variants: [
      { size: '3 kg', price: 30986 },
      { size: '15 kg', price: 107190 }
    ]
  },
  {
    id: 7,
    name: 'Felix x 15 sobres',
    description: 'sabor atún salmón pollo',
    image: 'images/07felix.jpeg',
    hasVariants: true,
    variants: [
      { size: 'Pack x 15', price: 14985 }
    ]
  },
  {
    id: 8,
    name: 'Piedras sanitarias Nic',
    description: '',
    image: 'images/08nic.jpeg',
    hasVariants: true,
    variants: [
      { size: '2 kg', price: 1900 },
      { size: '4 kg', price: 3400 }
    ]
  },
  {
    id: 9,
    name: 'Pellet',
    description: '',
    image: 'images/09generico.jpeg',
    hasVariants: true,
    variants: [
      { size: '5 kg', price: 4300 }
    ]
  },
];
