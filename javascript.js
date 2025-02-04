const codigos_desconto = [
    { code: "LAU10", discount: 10 },
]

let desconto_aplicado = false;
let nome_desconto_aplicado = '';
let percentagem_desconto = 0;

let cart = []; // Array para guardar items do carrinho | let por causa de o guardar no local storage

let cart_gomasKilo = [];

let cart_tuboslinhaslinguas = [];

let cart_gomastuboslinnhaslinguas = [];


const products_gomas = [
    { id: 1, name: "Aros de pêssego", price: 0, image: "https://i.ibb.co/WG9Cr06/1.jpg"},
    { id: 2, name: "Beijinhos de morango e nata", image: "https://i.ibb.co/K7vfMR6/2.jpg" },
    { id: 3, name: "Tacos de coca colas", image: "https://i.ibb.co/ySfPymq/3.jpg" },
    { id: 4, name: "Iglos recheado", image: "https://i.ibb.co/4ZPYJPZ/4.jpg" },
    { id: 5, name: "Natillas leite creme", image: "https://i.ibb.co/HhpXQXk/5.jpg" },
    { id: 6, name: "Corações de pêssego", image: "https://i.ibb.co/fMNrRY3/6.jpg" },
    { id: 7, name: "Lábios de morango", image: "https://i.ibb.co/GvHpVZX/7.jpg" },
    { id: 8, name: "Copos de gelado recheado", image: "https://i.ibb.co/bRpMDBM/8.jpg" },
    { id: 9, name: "Aros tutti fruit", image: "https://i.ibb.co/jzksPH2/9.jpg" },
    { id: 10, name: "Aros de morango", image: "https://i.ibb.co/S5sYKQN/10.jpg" },
    { id: 11, name: "Ursinhos", image: "https://i.ibb.co/9bXT4gy/11.jpg" },
    { id: 12, name: "Lágrimas", image: "https://i.ibb.co/m6PdGDm/12.jpg" },
    { id: 13, name: "Mangas recheadas", image: "https://i.ibb.co/GtnSHWZ/13.jpg" },
    { id: 14, name: "Jellys baby", image: "https://i.ibb.co/HxMnd1w/14.jpg" },
    { id: 15, name: "Amoras vermelhas",  image: "https://i.ibb.co/CtmGDNJ/15.jpg" },
    { id: 16, name: "Talhadas de manga",image: "https://i.ibb.co/SVqYW5M/16.jpg" },
    { id: 17, name: "Estrelas de framboesa", image: "https://i.ibb.co/72F6d3X/17.jpg" },
    { id: 18, name: "Frutos dos bosques recheados", image: "https://i.ibb.co/nP8L6KC/18.jpg" },
    { id: 19, name: "Polvos ácidos", image: "https://i.ibb.co/PgZZn3k/19.jpg" },
    { id: 20, name: "Tartitas de framboesa", image: "https://i.ibb.co/KzJj1cm/20.jpg" },
    { id: 21, name: "Bananas recheadas", image: "https://i.ibb.co/C5fbgc1/21.jpg" },
    { id: 22, name: "Presuntos com açúcar", image: "https://i.ibb.co/T87X5XC/22.jpg" },
    { id: 23, name: "Ovos", image: "https://i.ibb.co/fdGrJHR/23.jpg" },
    { id: 24, name: "Chupetas", image: "https://i.ibb.co/NgRcvd7/24.jpg" },
    { id: 25, name: "Morangos recheados", image: "https://i.ibb.co/KN81R5G/25.jpg" },
    { id: 26, name: "Tangerinas", image: "https://i.ibb.co/vkSsxTK/26.jpg" },
    { id: 27, name: "Melões", image: "https://i.ibb.co/Gxn5jKr/27.jpg" },
    { id: 28, name: "Cerejas ácidas", image: "https://i.ibb.co/kq3YSm7/28.jpg" },
    { id: 29, name: "Tijolos framboesa", image: "https://i.ibb.co/PTp4Fh4/29.jpg" },
    { id: 30, name: "Pinguins", image: "https://i.ibb.co/MDJFmpk/30.jpg" },
    { id: 31, name: "Tijolos arco íris ácidos", image: "https://i.ibb.co/D9GLgfV/31.jpg" },
    { id: 32, name: "Tacos arco íris ácidos", image: "https://i.ibb.co/2nzkpSP/32.jpg" },
    { id: 33, name: "Fruit attack", image: "https://i.ibb.co/qsjBrmk/33.jpg" },
    { id: 34, name: "Chips ácidas", image: "https://i.ibb.co/mN1t6jh/34.jpg" },
    { id: 35, name: "Pudim flan", image: "https://i.ibb.co/GMWRgcv/35.jpg" },
    { id: 36, name: "Tartitas de melancia ácidas", image: "https://i.ibb.co/mF7Lnfg/36.jpg" },
    { id: 37, name: "Piramides", image: "https://i.ibb.co/4NthCBN/37.jpg" },
    { id: 38, name: "Tartitas morango e nata", image: "https://i.ibb.co/KXKS1Cp/38.jpg" },
    { id: 39, name: "Talhadas de melancia", image: "https://i.ibb.co/Lx0zsMK/39.jpg" },
    { id: 40, name: "Corações recheados de framboesa", image: "https://i.ibb.co/zJZRNPN/40.jpg" },
    { id: 41, nome: "Corações recheados de morango", imagem: "https://i.ibb.co/R6Vf0Sb/41.jpg" },
    { id: 42, nome: "Cérebros recheados", imagem: "https://i.ibb.co/nCXCBZ7/42.jpg" },
    { id: 43, nome: "Twist de framboesa", imagem: "https://i.ibb.co/7S46KqX/43.jpg" },
    { id: 44, nome: "Beijinhos de framboesa", imagem: "https://i.ibb.co/SXMKqJr/44.jpg" },
    { id: 45, nome: "Twist de morango", imagem: "https://i.ibb.co/GpCXR8g/45.jpg" },
    { id: 46, nome: "Ossos", imagem: "https://i.ibb.co/YkyHnSn/46.jpg" },
    { id: 47, nome: "Ananás", imagem: "https://i.ibb.co/89hH36p/47.jpg" },
    { id: 48, nome: "Fatias de pizza", imagem: "https://i.ibb.co/MBZPKjr/48.jpg" },
    { id: 49, nome: "Morangos silvestres", imagem: "https://i.ibb.co/31gQw4s/49.jpg" },
    { id: 50, nome: "Moedas ácidas", imagem: "https://i.ibb.co/sVyvMSL/50.jpg" },
    { id: 51, nome: "Beijinhos de morango", imagem: "https://i.ibb.co/8XLztkD/51.jpg" },
    { id: 52, nome: "Regalliz de Maracujá", imagem: "https://i.ibb.co/LZM2d41/52.jpg" },
    { id: 53, nome: "Gelados", imagem: "https://i.ibb.co/k6FCxG9/53.jpg" },
    { id: 54, nome: "Regalliz de framboesa", imagem: "https://i.ibb.co/kynkTt4/54.jpg" },
    { id: 55, nome: "Bananas", imagem: "https://i.ibb.co/sqPXWdw/55.jpg" },
    { id: 56, nome: "Aros de morango", imagem: "https://i.ibb.co/CvhWxLm/56.jpg" },
    { id: 57, nome: "Terabytes morango", imagem: "https://i.ibb.co/FJ2SCB1/57.jpg" },
    { id: 58, nome: "Tijolos de morango ácidos", imagem: "https://i.ibb.co/JQYghnR/58.jpg" },
    { id: 59, nome: "Talhadas de framboesa ácidas", imagem: "https://i.ibb.co/1MZLtvF/59.jpg" },
    { id: 60, nome: "Corações tricolor", imagem: "https://i.ibb.co/xqQ25J3/60.jpg" },
    { id: 61, nome: "Ratos", imagem: "https://i.ibb.co/T0jwMSp/61.jpg" },
    { id: 62, nome: "Cerejas", imagem: "https://i.ibb.co/7Cs8XL5/62.jpg" },
    { id: 63, nome: "Minhocas", imagem: "https://i.ibb.co/yktDg5F/63.jpg" },
    { id: 64, nome: "Talhadas de ananás", imagem: "https://i.ibb.co/1T5N7cj/64.jpg" },
    { id: 65, nome: "Morangos com recheio de natas", imagem: "https://i.ibb.co/v407yDJ/65.jpg" },
    { id: 66, nome: "Cenouras", imagem: "https://i.ibb.co/G5j9xrj/66.jpg" },
    { id: 67, nome: "Amoras de framboesa", imagem: "https://i.ibb.co/Yh44Tk7/67.jpg" },
    { id: 68, nome: "Presuntos sem açúcar", imagem: "https://i.ibb.co/3d5HmFp/68.jpg" },
    { id: 69, nome: "Minhocas com açúcar", imagem: "https://i.ibb.co/tHMKtY7/69.jpg" },
    { id: 70, name: "Amoras de morango e nata", image: "https://i.ibb.co/BK93rNW/70.jpg" },
    { id: 71, name: "Coca colas",  image: "https://i.ibb.co/CVpyFCK/71.jpg" },
    { id: 72, name: "Chapéus mexicanos",  image: "https://i.ibb.co/bJXwhpG/72.jpg" },
    { id: 73, name: "Coca colas ácidas",  image: "https://i.ibb.co/qWNLHjZ/73.jpg" },
    { id: 74, name: "Mini mix ácido", image: "https://i.ibb.co/gWc3XVP/74.jpg" },
    { id: 75, name: "Mega mix ácido", image: "https://i.ibb.co/GnShgRX/75.jpg" },
    { id: 76, name: "Tacos de framboesa ácidos", image: "https://i.ibb.co/zxX194J/76.jpg" },
    { id: 77, name: "Tacos de melancia ácidos", image: "https://i.ibb.co/CBbxzVf/77.jpg" },
    { id: 78, name: "Pés ácidos", image: "https://i.ibb.co/XtmvYY9/78.jpg" },
    { id: 79, name: "Tijolos de Morango e Nata", image: "https://i.ibb.co/D7BvrXM/79.jpg" },
    { id: 80, name: "Macedónias", image: "https://i.ibb.co/nD8zNch/80.jpg" },
    { id: 81, name: "Feijões", image: "https://i.ibb.co/Hz43wHr/81.jpg" },
    { id: 82, name: "Pirâmides de melancias recheadas", image: "https://i.ibb.co/3T5Rw23/82.jpg" },
    { id: 83, name: "Corações de pêssego recheados", image: "https://i.ibb.co/GP0hG4t/83.jpg" },
    { id: 84, name: "Maçãs", image: "https://i.ibb.co/rsLvz6p/84.jpg" },
    { id: 85, name: "Sapatilhas", image: "https://i.ibb.co/G287nrP/85.jpg" },
    { id: 86, name: "Terabytes de kiwi", image: "https://i.ibb.co/MCQwLdJ/86.jpg" },
    { id: 87, name: "Tiras de Morango e Nata", image: "https://i.ibb.co/7WBvbbG/87.jpg" },
    { id: 88, name: "Dedos", image: "https://i.ibb.co/fF2k65Q/88.jpg" },
    { id: 89, name: "Torcidas de framboesa ácidas", image: "https://i.ibb.co/qFLsNCH/89.jpg" },
    { id: 90, name: "Torcidas de lima ácidas", image: "https://i.ibb.co/c2jZWS0/90.jpg" },
    { id: 91, name: "Conchas", image: "https://i.ibb.co/j3fmLCn/91.jpg" },
    { id: 92, name: "Escovas de dentes", image: "https://i.ibb.co/WtT6Zn3/92.jpg" },
    { id: 93, name: "Amoras", image: "https://i.ibb.co/D8CDqPV/93.jpg" },
    { id: 94, name: "Pés", image: "https://i.ibb.co/wpNc5bT/94.jpg" },
    { id: 95, name: "Goma iogurte", image: "https://i.ibb.co/1Gg4rYf/95.jpg" },
    { id: 96, name: "Dentaduras", image: "https://i.ibb.co/2c3VvFZ/96.jpg" },
    { id: 97, name: "Caveiras recheadas", image: "https://i.ibb.co/Y8pVcrq/97.jpg" },
    { id: 98, name: "Raquetes", image: "https://i.ibb.co/9gFZrFq/98.jpg" },
    { id: 99, name: "Cartuxos", image: "https://i.ibb.co/KF5TCqw/99.jpg" },
    { id: 100, name: "Tiras de melancia ácidas", image: "https://i.ibb.co/j3RW7M5/100.jpg" },
    { id: 101, name: "Tijolos de coca cola ácidos", image: "https://i.ibb.co/fppJktn/101.jpg" },
    { id: 102, name: "Limões", image: "https://i.ibb.co/9sx4W8D/102.jpg" },
    { id: 103, name: "Torcida de morango ácidas", image: "https://i.ibb.co/NmdJy8W/103.jpg" },
    { id: 104, name: "Amoras brancas", image: "https://i.ibb.co/Y01NzD8/104.jpg" },
    { id: 105, name: "Búzios e conchas", image:"https://i.ibb.co/pvC66wWL/411.jpg"},

    { id: 99999, name: "Saco individual", price: 0.10 , image:"images/99999.jpeg", peso: 5},  
];

const products_tuboslinhas = [
    { id: 1001, name: "Tranças de arco íris", price: 0.15, image: "https://i.ibb.co/7Np9Zby/105.jpg", quantity: 0 },
    { id: 1002, name: "Tubos de morango ácidos", price: 0.10, image: "https://i.ibb.co/5MjgZy6/106.jpg", quantity: 0 },
    { id: 1003, name: "Tubos de framboesa recheados", price: 0.15, image: "https://i.ibb.co/qNmqs49/107.jpg", quantity: 0 },
    { id: 1004, name: "Tubos multifrutos ácidos", price: 0.10, image: "https://i.ibb.co/MN9h5qv/108.jpghttps://i.ibb.co/2305MwZt/Whats-App-Image-2025-02-03-at-19-35-16.jpg", quantity: 0 },
    { id: 1005, name: "Tubos de melancia recheados", price: 0.15, image: "https://i.ibb.co/xsgQ6CT/109.jpg", quantity: 0 },
    { id: 1006, name: "Tubos de pastilha", price: 0.15, image: "https://i.ibb.co/b10ycyc/110.jpg", quantity: 0 },
    { id: 1007, name: "Tubos de iogurte", price: 0.15, image: "https://i.ibb.co/2qJnBwY/111.jpg", quantity: 0 },
    { id: 1008, name: "Tubos de coca cola ácidos", price: 0.15, image: "https://i.ibb.co/FVYgfXn/112.jpg", quantity: 0 },
    { id: 1009, name: "Jumbos de morango e framboesa", price: 0.70, image: "https://i.ibb.co/g43hky5/113.jpg", quantity: 0, peso:60 },
    { id: 1010, name: "Jumbos de morango e nata sem açúcar", price: 0.30, image: "https://i.ibb.co/vXt2xmL/114.jpg", quantity: 0 ,peso:30},
    { id: 1011, name: "Jumbos de morango e nata com açúcar", price: 0.30, image: "https://i.ibb.co/GVrsNmc/115.jpg", quantity: 0 ,peso:30},
    { id: 1012, name: "Maxi tubos coca cola ácidos", price: 0.30, image: "https://i.ibb.co/rH1CHyc/117.jpg", quantity: 0,peso:30},
    { id: 1013, name: "Tubos de pêssego", price: 0.15, image: "https://i.ibb.co/8Kd6NvY/118.jpg", quantity: 0 },
    { id: 1014, name: "Tubos arco íris", price: 0.15, image: "https://i.ibb.co/ZHSpL1H/119.jpg", quantity: 0 },
    { id: 1015, name: "Maxi tubos arco íris com açúcar", price: 0.30, image: "https://i.ibb.co/fFYHRZS/120.jpg", quantity: 0, peso:30 },
    { id: 1016, name: "Maxi tubos melancia", price: 0.30, image: "https://i.ibb.co/wgw0Y0W/121.jpg", quantity: 0, peso:30 },
    { id: 1017, name: "Maxi tubos arco íris sem açúcar", price: 0.25, image: "https://i.ibb.co/VxrXQHP/122.jpg", quantity: 0, peso:30 },
    { id: 1018, name: "Tubos de morango e nata", price: 0.50, image: "https://i.ibb.co/f1cRkKd/123.jpg", quantity: 0 },
    { id: 1019, name: "Tubos de manga", price: 0.10, image: "https://i.ibb.co/8Kd6NvY/118.jpg", quantity: 0 },
    { id: 1020, name: "Jumbos sanduíche morango e nata", price: 0.70, image: "https://i.ibb.co/TqBcdYYF/310.jpg", quantity: 0, peso:60 },
    { id: 1021, name: "Linhas de melancia", price: 0.15, image: "https://i.ibb.co/6mxgj1X/124.jpg", quantity: 0 },
    { id: 1022, name: "Linhas de framboesa", price: 0.15, image: "https://i.ibb.co/Tqx0H7D/125.jpg", quantity: 0 },
    { id: 1023, name: "Linhas de morango e nata", price: 0.15, image: "https://i.ibb.co/51dVwsh/126.jpg", quantity: 0 },
    { id: 1024, name: "Linhas de limão", price: 0.15, image: "https://i.ibb.co/Lvk5rFF/127.jpg", quantity: 0 },
    { id: 1025, name: "Linhas de morango", price: 0.15, image: "https://i.ibb.co/98z302N/128.jpg", quantity: 0 }
];

const products_linguas = [
    { id: 2001, name: "Línguas de framboesa", price: 0.15, image: "https://i.ibb.co/23nj1wt/129.jpg", quantity: 0 },
    { id: 2002, name: "Línguas de maçã", price: 0.15, image: "https://i.ibb.co/Vwpc62B/130.jpg", quantity: 0 },
    { id: 2003, name: "Línguas arco íris", price: 0.15, image: "https://i.ibb.co/SfH9HWJ/131.jpg", quantity: 0 },
    { id: 2004, name: "Línguas multifruta", price: 0.10, image: "https://i.ibb.co/dQr4dMX/132.jpg", quantity: 0 },
    { id: 2005, name: "Línguas de morango", price: 0.15, image: "https://i.ibb.co/J7d1zmt/133.jpg", quantity: 0 },
    { id: 2006, name: "Línguas de melancia", price: 0.15, image: "https://i.ibb.co/pLLDyg2/134.jpg", quantity: 0 },
    { id: 2007, name: "Línguas de coca-cola e limão", price: 0.15, image: "https://i.ibb.co/6JF2HCq/135.jpg", quantity: 0 },
    { id: 2008, name: "Línguas de framboesa", price: 0.15, image: "https://i.ibb.co/kx2yLk8/136.jpg", quantity: 0 },
    { id: 2009, name: "Línguas de coca-cola", price: 0.15, image: "https://i.ibb.co/Q7Pmm4Pz/139.jpg", quantity: 0 },
    { id: 2010, name: "Línguas de morango e nata", price: 0.15, image: "https://i.ibb.co/9q3L6j9/138.jpg", quantity: 0 },
    { id: 2011, name: "Línguas arco-íris", price: 0.15, image: "https://i.ibb.co/Mzw978K/137.jpg", quantity: 0 }
];

const products_pastilhas =[
    { id: 3001, name: "Rolo de pastilha com tatuagem", price: 0.90, image: "https://i.ibb.co/j5MqDr7/140.jpg", quantity: 0, peso:30},
    { id: 3002, name: "Blong de Iogurte de Morango", price: 0.15, image: "https://i.ibb.co/025Wv6m/141.jpg", quantity: 0 },
    { id: 3003, name: "Blong de Morango", price: 0.15, image: "https://i.ibb.co/YjHgpXc/142.jpg", quantity: 0 },
    { id: 3004, name: "Blong de Melancia", price: 0.15, image: "https://i.ibb.co/gmsCrxY/143.jpg", quantity: 0 },
    { id: 3005, name: "Blong de Frutas Vermelhas", price: 0.15, image: "https://i.ibb.co/mqdQQGd/144.jpg", quantity: 0 },
    { id: 3006, name: "Blong Nitroferas", price: 0.20, image: "https://i.ibb.co/d4bRDpP/145.jpg", quantity: 0 },
    { id: 3007, name: "Blong Napolitano", price: 0.15, image: "https://i.ibb.co/XkG0Gkq/146.jpg", quantity: 0 },
    { id: 3008, name: "Blong Menta", price: 0.15, image: "https://i.ibb.co/yVjfHwB/147.jpg", quantity: 0 },
    { id: 3009, name: "Blong Energy", price: 0.20, image: "https://i.ibb.co/GtrrNXD/148.jpg", quantity: 0 },
    { id: 3010, name: "Blong Hortelã", price: 0.15, image: "https://i.ibb.co/Z2gbXN1/149.jpg", quantity: 0 },
    { id: 3011, name: "Blong Framboesa", price: 0.15, image: "https://i.ibb.co/3fpX0g4/150.jpg", quantity: 0 }
]

const products_gomasxxl = [
    { id: 4001, name: "Anacondas [XXL]", price: 0.40, image: "https://i.ibb.co/PsgYBhzH/151.jpg", quantity: 0 },
    { id: 4002, name: "Ovos [XXL]", price: 0.40, image: "https://i.ibb.co/bZMqXkK/152.jpg", quantity: 0 },
    { id: 4003, name: "Coca Colas [XXL]", price: 0.40, image: "https://i.ibb.co/rRD1QK79/153.jpg", quantity: 0 },
    { id: 4004, name: "Golfinhos [XXL]", price: 0.40, image: "https://i.ibb.co/k6wCL1Lk/154.jpg", quantity: 0 },
    { id: 4005, name: "Morangos [XXL]", price: 0.40, image: "https://i.ibb.co/xtxTSbBX/155.jpg", quantity: 0 },
    { id: 4006, name: "Bananas [XXL]", price: 0.40, image: "https://i.ibb.co/WvjZq4Sp/407.jpg", quantity: 0 },
    { id: 4007, name: "Ursos [XXL]", price: 0.50, image: "https://i.ibb.co/7tMCjg5z/409.jpg", quantity: 0 },
    { id: 4008, name: "Cerejas [XXL]", price: 0.40, image: "https://i.ibb.co/cctwbdHr/405.jpg", quantity: 0 },
    { id: 4009, name: "Rãs [XXL]", price: 0.40, image: "https://i.ibb.co/JRK0CWFK/408.jpg", quantity: 0 },
    { id: 4010, name: "Caveiras [XXL]", price: 0.50, image: "https://i.ibb.co/tp2Bhg9c/410.jpg", quantity: 0 },
    { id: 4011, name: "Morangos Ácidos [XXL]", price: 0.50, image: "https://i.ibb.co/QFfHc8H8/406.jpg", quantity: 0 }
];

const products_gomaspicantes = [
    { id: 5001, name: "Mangas picantes", price: 0.10, image: "https://i.ibb.co/Kj0424hS/156.jpg", quantity: 0 },
    { id: 5002, name: "Mexilhão", price: 0.10, image: "https://i.ibb.co/93SgzVYZ/157.jpg", quantity: 0 },
    { id: 5003, name: "Malaguetas picantes", price: 0.10, image: "https://i.ibb.co/zhjFp0KK/158.jpg", quantity: 0 }
];

const products_marshmallows = [
    { id: 6001, name: "Marshmallow coberto de chocolate de leite", price: 0.25, image: "https://i.ibb.co/S4Z2syhw/168.jpg", quantity: 0, peso: 5  },
    { id: 6002, name: "Crujitos Morango/Baunilha", price: 0.25, image: "https://i.ibb.co/mFdtJYFf/167.jpg", quantity: 0, sabor: ["Morango", "Baunilha"], peso: 5  },
    { id: 6003, name: "Marshmallow branco e rosa recheado de morango", price: 0.10, image: "https://i.ibb.co/BKz0DdNX/170.jpg", quantity: 0, peso: 5  },
    { id: 6004, name: "Marshmallow coberto de chocolate negro", price: 0.30, image: "https://i.ibb.co/Zz0tcpxb/169.jpg", quantity: 0, peso: 5  },
    { id: 6005, name: "Recheado de morango", price: 0.15, image: "https://i.ibb.co/pB7MMHhF/171.jpg", quantity: 0, peso: 5  },
    { id: 6006, name: "Recheado de framboesa", price: 0.15, image: "https://i.ibb.co/3YsnHrSv/172.jpg", quantity: 0, peso: 5  },
    { id: 6007, name: "Bananas choco", price: 0.35, image: "https://i.ibb.co/mYPrGvr/173.jpg", quantity: 0, peso: 5  },
    { id: 6008, name: "Choco jumbos", price: 0.90, image: "https://i.ibb.co/Q2ChzDK/174.jpg", quantity: 0, peso: 40 },
    { id: 6009, name: "Crujitos de Chocolate Branco/Leite", price: 0.25, image: "https://i.ibb.co/JWsJNjZT/175.jpg", quantity: 0, sabor: ["Chocolate Branco", "Chocolate Leite"], peso: 5  },
    { id: 6010, name: "Croissants recheados", price: 0.30, image: "https://i.ibb.co/TzhdDpt/176.jpg", quantity: 0, peso: 5  },
    { id: 6011, name: "Bananas", price: 0.30, image: "https://i.ibb.co/Kxw6PXPZ/177.jpg", quantity: 0, peso: 5  },
    { id: 6012, name: "Marshmallows de frutas recheados", price: 0.30, image: "https://i.ibb.co/DfhFZYVX/178.jpg", quantity: 0, peso: 5  },
    { id: 6013, name: "Choco nubes", price: 0.30, image: "https://i.ibb.co/hR7HtY6Z/179.jpg", quantity: 0 ,peso: 5},
    { id: 6014, name: "Marshmallows brancos", price: 0.10, image: "https://i.ibb.co/TDf2mqwy/180.jpg", quantity: 0 , peso: 5},
    { id: 6015, name: "Bolas de golfe", price: 0.10, image:"https://i.ibb.co/Q7bwPJyY/412.jpg", quantity: 0, peso: 5}
];

const products_chocolates = [
    { id: 7001, name: "Toblerone de chocolate branco", price: 4.00, image: "https://i.ibb.co/v4NFJWgT/159.jpg", quantity: 0, peso: 100},
    { id: 7002, name: "Toblerone", price: 4.00, image: "https://i.ibb.co/Fk3jsTY0/160.jpg", quantity: 0, peso: 100 },
    { id: 7003, name: "Lion", price: 1.10, image: "https://i.ibb.co/ZtL6t22/161.jpg", quantity: 0, peso: 50 },
    { id: 7004, name: "Mars", price: 1.10, image: "https://i.ibb.co/HSWngQ8/162.jpg", quantity: 0, peso: 50 },
    { id: 7005, name: "Snickers", price: 1.10, image: "https://i.ibb.co/R4ZY5dgY/163.jpg", quantity: 0, peso: 50},
    { id: 7006, name: "Lion de chocolate branco", price: 1.10, image: "https://i.ibb.co/gNPQZDH/164.jpg", quantity: 0, peso: 50 },
    { id: 7007, name: "Twix", price: 1.10, image: "https://i.ibb.co/F9D8NpF/165.jpg", quantity: 0, peso: 50 },
    { id: 7008, name: "Twix de chocolate branco", price: 1.10, image: "https://i.ibb.co/LDS7D6Yd/166.jpg", quantity: 0, peso: 50 },
];

const products_boxs = [
    { id: 8001, name: "Box Mistério", price: 0, image: "images/categoria-boxes.jpg", quantity: 0, peso: 0},
    { id: 8002, name: "Balde 2,5 kilos", price: 30, image: "images/balde.jpeg", quantity: 0, peso: 2500 },
    { id: 8003, name: "Box degustação", price:0 ,image: "https://i.ibb.co/bMYB4TYL/Captura-de-ecr-2025-02-04-034018.png",quantity: 0, peso:0}
]

const products_outros=[
    { id: 9001, name: "Chupas com pó", price: 2.20, image: "https://i.ibb.co/8nqwYZ3K/190.jpg", quantity: 0 , peso: 60},
    { id: 9002, name: "Dip feet com pó", price: 0.30, image: "https://i.ibb.co/5gWqwTTk/191.jpg", quantity: 0, peso: 20},
    { id: 9003, name: "Ácido gumétrico", price: 0.40, image: "https://i.ibb.co/sJvqc0tf/192.jpg", quantity: 0, peso: 30 },
    { id: 9004, name: "Chaves inglesas coca cola e limão", price: 0.15, image: "https://i.ibb.co/0RsZRDjL/193.jpg", quantity: 0, peso: 5 },
    { id: 9005, name: "Chaves inglesas de melancia", price: 1.10, image: "https://i.ibb.co/sJdd6Gt6/194.jpg", quantity: 0, peso: 5 },
    { id: 9006, name: "Rolones pinta línguas", price: 1.80, image: "https://i.ibb.co/KcnnCv9J/195.jpg", quantity: 0, peso: 100 },
    { id: 9007, name: "Burguer jelly", price: 1.70, image: "https://i.ibb.co/HTbWpfN8/196.jpg", quantity: 0, peso: 100 },
    { id: 9008, name: "Chupas boca de pato", price: 2.20, image: "https://i.ibb.co/jkvxY1mP/197.jpg", quantity: 0, peso: 50 },
    { id: 9009, name: "Spray", price: 2.50, image: "https://i.ibb.co/YBRKpD9G/198.jpg", quantity: 0, peso: 100  },
    { id: 9010, name: "Pacotes Kit smile", price: 1.20, image: "https://i.ibb.co/9HVpSDYG/199.jpg", quantity: 0, peso: 90},
    { id: 9011, name: "Skittles", price: 2.50, image: "https://i.ibb.co/21nHyndY/201.jpg", quantity: 0, peso: 160 },
    { id: 9012, name: "Nerds", price: 3.00, image: "https://i.ibb.co/GQc2vjC3/200.jpg", quantity: 0, peso: 160 },
    { id: 9013, name: "Delijelly", price: 0.10, image: "https://i.ibb.co/rKtSGGz1/202.jpg", quantity: 0, peso: 10 },
    { id: 9014, name: "Colares", price: 0.40, image: "https://i.ibb.co/DfYtd5J4/203.jpg", quantity: 0, peso:  20},
    { id: 9015, name: "Chaves arco-íris", price: 0.15, image: "https://i.ibb.co/Fb2qW4hW/205.jpg", quantity: 0,peso: 5},
    { id: 9016, name: "Fini roller", price: 0.55, image: "https://i.ibb.co/DftmZGw1/204.jpg", quantity: 0, peso:  20},
    { id: 9017, name: "Chaves inglesas de arco íris", price: 0.15, image: "https://i.ibb.co/Whq9t8G/206.jpg", quantity: 0, peso: 5 },
    { id: 9018, name: "Tartes recheadas", price: 0.25, image: "https://i.ibb.co/rfGMXcGb/211.jpg", quantity: 0, peso: 20}
];

const products_namorados=[
    { id: 99994, name: "Coração Rose Gold", price: 17.50, image: "https://i.ibb.co/Tx48tStC/304.jpg", quantity: 0 , peso: 1300},
    { id: 99995, name: "Redonda Prateada", price: 17.50, image: "https://i.ibb.co/prKq8rpY/305.jpg", quantity: 0 ,peso: 1300},
    { id: 99996, name: "Coração Prateado", price: 17.50, image: "https://i.ibb.co/fV83RtcC/307.jpg", quantity: 0 , peso: 1300},
    { id: 99997, name: "Coração Dourado", price: 17.50, image: "https://i.ibb.co/M5kbQDzR/308.jpg", quantity: 0 , peso: 1300},
    { id: 99998, name: "Redonda Dourada", price: 17.50, image: "https://i.ibb.co/xKqMJY5D/309.jpg", quantity: 0 , peso: 1300},
]

let global_total = 0;
let global_nGomasKilo = 0;
let gomasKilo_carrinho = false;

function addKilosRandom(){
    const peso = document.getElementById('kilos');
    global_total += parseFloat(peso.value) * parseFloat(peso.value) >= 2 ? 9 : 9.50;

    let product = null;

    if (window.location.href.includes("gomaskilo.html")) {
        product = { id: 10000+global_nGomasKilo, name : "Gomas ao Kilo (Mix)", peso: parseFloat(peso.value), price: parseFloat(peso.value) * 9.50, peso: parseFloat(peso.value), image: "https://i.ibb.co/bMYB4TYL/Captura-de-ecr-2025-02-04-034018.png"}
        const allSelected_gomas = document.getElementsByClassName("selected");
        const elementsArray = Array.from(allSelected_gomas);
        for (let i = 0; i < elementsArray.length; i++) {
            elementsArray[i].classList.remove("selected");
            const button = produtoDiv.querySelector('.selecionar');
            button.textContent = "Selecionar";
        }
    }
    else if(window.location.href.includes("tuboslinhaslinguas.html")){
        product = { id: 10000+global_nGomasKilo, name : "Tubos, Linhas e Línguas (Mix)", peso: parseFloat(peso.value), price: parseFloat(peso.value) * 9.50, peso: parseFloat(peso.value), image: "https://i.ibb.co/bMYB4TYL/Captura-de-ecr-2025-02-04-034018.png"}
        const allSelected_gomas = document.getElementsByClassName("selected");
        const elementsArray = Array.from(allSelected_gomas);
        for (let i = 0; i < elementsArray.length; i++) {
            elementsArray[i].classList.remove("selected");
            const button = produtoDiv.querySelector('.selecionar-tll');
            button.textContent = "Selecionar";
        }
    }
    else if(window.location.href.includes("gomastuboslinhaslinguas.html")){
        product = { id: 10000+global_nGomasKilo, name : "Gomas, Tubos, Linhas e Línguas (Mix)", peso: parseFloat(peso.value), price: parseFloat(peso.value) * 9.50, peso: parseFloat(peso.value), image: "https://i.ibb.co/bMYB4TYL/Captura-de-ecr-2025-02-04-034018.png"}
        const allSelected_gomas = document.getElementsByClassName("selected");
        const elementsArray = Array.from(allSelected_gomas);
        for (let i = 0; i < elementsArray.length; i++) {
            elementsArray[i].classList.remove("selected");
            const button = produtoDiv.querySelector('.selecionar-gtll');
            button.textContent = "Selecionar";
        }
    }

    cart.push({ ...product, quantity: 1 });

    peso.value = '';
    global_nGomasKilo += 1; 

    showNotification(`${product.name} foi adicionado/a!`);

    updateCartCount();
    updateCartPopup();
}
function addKilos(){
    const addKilos_btn = document.getElementById('add_kilos');

    const peso = document.getElementById('kilos');
    global_total += parseFloat(peso.value) * parseFloat(peso.value) >= 2 ? 9 : 9.50;

    let product = null;

    if(window.location.href.includes("gomaskilo.html")){
        product = { 
            id: 10000+global_nGomasKilo, 
            name : "Gomas ao Kilo", 
            peso: parseFloat(peso.value),
            price: parseFloat(peso.value) * 9.50, 
            peso: parseFloat(peso.value), 
            image: "https://i.ibb.co/bMYB4TYL/Captura-de-ecr-2025-02-04-034018.png",
            gomas : [],
        }
        const allSelected_gomas = document.getElementsByClassName("selected");
        const elementsArray = Array.from(allSelected_gomas);
        for (let i = 0; i < elementsArray.length; i++) {
            elementsArray[i].classList.remove("selected");
            const button = elementsArray[i].querySelector('.selecionar');
            button.textContent = "Selecionar";
        }

        global_nGomasKilo += 1;

        product.gomas = cart_gomasKilo;
    }
    else if(window.location.href.includes("tuboslinhaslinguas.html")){
        product = { 
            id: 10000+global_nGomasKilo, 
            name : "Tubos, Linhas e Línguas", 
            peso: parseFloat(peso.value),
            price: parseFloat(peso.value) * 9.50, 
            peso: parseFloat(peso.value), 
            image: "https://i.ibb.co/bMYB4TYL/Captura-de-ecr-2025-02-04-034018.png",
            gomas : [],
        }
        const allSelected_gomas = document.getElementsByClassName("selected");
        const elementsArray = Array.from(allSelected_gomas);
        for (let i = 0; i < elementsArray.length; i++) {
            elementsArray[i].classList.remove("selected");
            const button = elementsArray[i].querySelector('.selecionar-tll');
            button.textContent = "Selecionar";
        }

        global_nGomasKilo += 1;

        product.gomas = cart_tuboslinhaslinguas;
    }
    else if(window.location.href.includes("gomastuboslinhaslinguas.html")){
        product = {
            id: 10000+global_nGomasKilo,
            name : "Gomas, Tubos, Linhas e Línguas",
            peso: parseFloat(peso.value),
            price: parseFloat(peso.value)* 9.50,
            peso: parseFloat(peso.value),
            image: "https://i.ibb.co/bMYB4TYL/Captura-de-ecr-2025-02-04-034018.png",
            gomas : [],
        }

        const allSelected_gomas = document.getElementsByClassName("selected");
        const elementsArray = Array.from(allSelected_gomas);
        for (let i = 0; i < elementsArray.length; i++) {
            elementsArray[i].classList.remove("selected");
            const button = elementsArray[i].querySelector('.selecionar-gtll');
            button.textContent = "Selecionar";
        }

        global_nGomasKilo += 1;

        product.gomas = cart_gomastuboslinnhaslinguas;
    }

    peso.value = '';
    
    cart_gomasKilo = [];
    cart_tuboslinhaslinguas = [];
    cart_gomastuboslinnhaslinguas = [];

    addKilos_btn.disabled = true;

    cart.push({ ...product, quantity: 1 });

    showNotification(`${product.name} foi adicionado/a!`);

    updateCartCount();
    updateCartPopup();
}

// Function to update cart count
function updateCartCount() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0); 

    document.getElementById('cart-count').textContent = totalCount; 

    cart.forEach(cartItem => {
        if (cartItem.quantity == 0){
            cart.splice(cartItem, 1);
        }
    });
}

function updateCartPopup() {
    let total = 0;

    // GOMAS AO KILO
    if (window.location.href.includes("gomaskilo.html") || window.location.href.includes("tuboslinhaslinguas.html") || window.location.href.includes("gomastuboslinhaslinguas.html")) {

        // HANDLE BOTAO ADICIONAR
        const addKilos = document.getElementById('add_kilos');
        const addKilosRandom = document.getElementById('add_kilos_random'); 
        const nGomasKilo_added = document.getElementsByClassName("selected");
        const peso = document.getElementById('kilos');

        if(nGomasKilo_added.length < parseInt(peso.value)*10){
            addKilos.disabled = true;
        }

        if(peso.value != ''){
            addKilosRandom.disabled = false;
            if(peso.value >= 1){
                addKilos.textContent = `Adicionar (min.${parseInt(peso.value)*10} | máx.${parseInt(peso.value)*10+(parseInt(peso.value)*10+ 10)})`;
            }
        }
        else{
            addKilosRandom.disabled = true;
            addKilos.disabled = true;
            addKilos.textContent = `Adicionar (selecione o peso)`
        }
        if(peso.value != '' && nGomasKilo_added.length >= parseInt(peso.value)*10 && peso.value >= 1){
            addKilos.disabled = false;
        }

    }

    
    const cartItemsList = document.getElementById('cart-items-list');
    const totalPrice = document.getElementById('total-price');
    
    // Clear the current cart items in the popup
    cartItemsList.innerHTML = '';


    // Loop through cart items and add them to the popup
    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        
        itemElement.innerHTML = `
                <div class="cart-item-content">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image" />
                    <div class="cart-item-details">
                        <p>${item.name}${item.id >= 10000 && item.id < 99994 ? `<br>${item.peso >= 1 ? `${item.peso} kg` : `${item.peso * 1000} gramas`}` : ''}</p>
                        <p> ${`${(item.price * item.quantity).toFixed(2)}€`}</p>
                        <div class="quantity-controls">
                            <button class="decrease-qty" data-index="${index}">-</button>
                            <span class="item-quantity">${item.quantity}</span>
                            <button class="increase-qty" data-index="${index}">+</button>
                        </div>
                    </div>
                    <button class="delete-item" data-index="${index}">
                        <i class="fa fa-trash" style="font-size: 1.2rem;"></i>
                    </button>
                </div>
        `;

        if(item.quantity){
            total += item.price * item.quantity;
        }
        else{
            total += item.price;
        }

        cartItemsList.appendChild(itemElement);
    });
    

    // Update total price
    totalPrice.textContent = `Total: ${total.toFixed(2)}€`;

    // Show or hide the download PDF button based on cart items
    const downloadButton = document.getElementById('download-pdf-btn');

    downloadButton.style.display = 'block';


    // Add event listeners to delete buttons
    document.querySelectorAll('.delete-item').forEach(button => {
        button.addEventListener('click', function() {
            let index = this.getAttribute('data-index');

            const product = cart[index];
            showNotification(`${product.name} foi removido/a!`);

            if(product.id == 99999){
                var checkbox = document.getElementById("sacoINDIVIDUAL");
                var quantityInput = document.getElementById("quantity");

                checkbox.checked = false;
                quantityInput.value = null;
            }

            product.quantity = 0;

            cart.splice(index, 1); // Remove item from cart

            /*if(cart.length == 0){ BUG
                const btn = document.getElementById('next-btn');
                btn.disabled = true;
            }*/
            
            updateCartCount(); // Update cart count
            updateCartPopup(); // Refresh cart popup
        });
    });
    document.querySelectorAll('.decrease-qty').forEach(button => {
        button.addEventListener('click', function() {
            let index = this.getAttribute('data-index');

            const product = cart[index];

            if(product.quantity > 1){
                product.quantity -= 1;
            }
            else{
                showNotification(`${product.name} foi removido/a!`);

                if(product.id == 99999){
                    var checkbox = document.getElementById("sacoINDIVIDUAL");
                    var quantityInput = document.getElementById("quantity");

                    checkbox.checked = false;
                    quantityInput.value = null;
                }

                product.quantity = 0;

                cart.splice(index, 1); // Remove item from cart
            }
            
            updateCartCount(); // Update cart count
            updateCartPopup(); // Refresh cart popup
        });
    });
    document.querySelectorAll('.increase-qty').forEach(button => {
        button.addEventListener('click', function() {
            let index = this.getAttribute('data-index');

            const product = cart[index];

            product.quantity += 1;

            updateCartCount(); // Update cart count
            updateCartPopup(); // Refresh cart popup
        });
    });




    saveCartToLocalStorage(); // Guardar mudanças no Local Storage
}



// HANDLE SELECIONAR GOMAS AO KILO
document.querySelectorAll('.selecionar').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.getAttribute('data-id');
        const product = products_gomas.find(item => item.id == productId);

        const nSelected = document.getElementsByClassName("selected").length;
        const peso = document.getElementById('kilos');
        
        var element = document.getElementById(productId);
        var button = element.querySelector(".selecionar");

        if (element.classList.contains("selected")){
            showNotification(`${product.name} foi removido/a!`);

            element.classList.remove("selected");
            button.textContent = "Selecionar";

            const index = cart.findIndex(item => item.id === product.id);
            cart_gomasKilo.splice(index, 1);
        }
        else{
            if(nSelected == parseInt(peso.value)*10+(parseInt(peso.value)*10+ 10)){
                // Show a notification at the click position
                showNotification(`Número de gomas selecionadas atingido!`);
            }
            else if(nSelected < parseInt(peso.value)*10+(parseInt(peso.value)*10+ 10)){
                // Show a notification at the click position
                showNotification(`${product.name} foi selecionado/a!`);

                element.classList.add("selected");
                button.textContent = "Remover";

                cart_gomasKilo.push(product);
            }
        }

        // Update cart count and popup
        updateCartCount();
        updateCartPopup();
        
    });
});

// HANDLE SELECIONAR TUBOS+LINHAS+LINGUAS
document.querySelectorAll('.selecionar-tll').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.getAttribute('data-id');
        let product = products_tuboslinhas.find(item => item.id == productId);
        if(!product) 
            product = products_linguas.find(item => item.id == productId);

        const nSelected = document.getElementsByClassName("selected").length;
        const peso = document.getElementById('kilos');
        
        var element = document.getElementById(productId);
        var button = element.querySelector(".selecionar-tll");

        if (element.classList.contains("selected")){
            showNotification(`${product.name} foi removido/a!`);

            element.classList.remove("selected");
            button.textContent = "Selecionar";

            const index = cart.findIndex(item => item.id === product.id);
            cart_tuboslinhaslinguas.splice(index, 1);
        }
        else{
            if(nSelected == parseInt(peso.value)*10+(parseInt(peso.value)*10+ 10)){
                // Show a notification at the click position
                showNotification(`Número de gomas selecionadas atingido!`);
            }
            else if(nSelected < parseInt(peso.value)*10+(parseInt(peso.value)*10+ 10)){
                // Show a notification at the click position
                showNotification(`${product.name} foi selecionado/a!`);

                element.classList.add("selected");
                button.textContent = "Remover";

                if(product.id == 1004){
                    const sabor = document.getElementById(`sabores-1004`);
                    product.name += ` [${sabor.value}]`;
                } // TUBOS MULTIFRUTOS ÁCIDOS
                if(product.id == 2004){
                    const sabor = document.getElementById(`sabores-2004`);
                    product.name += ` [${sabor.value}]`;
                } // LINGUAS MULTIFRUTOS

                cart_tuboslinhaslinguas.push(product);
            }
        }

        // Update cart count and popup
        updateCartCount();
        updateCartPopup();
        
    });
});

// HANDLE SELECIONAR GOMAS+TUBOS+LINHAS+LINGUAS
document.querySelectorAll('.selecionar-gtll').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.getAttribute('data-id');
        let product = products_gomas.find(item => item.id == productId);
        if(!product){
            product = products_tuboslinhas.find(item => item.id == productId);
            if(!product)
                product = products_linguas.find(item => item.id == productId);
        }

        const nSelected = document.getElementsByClassName("selected").length;
        const peso = document.getElementById('kilos');
        
        var element = document.getElementById(productId);
        var button = element.querySelector(".selecionar-gtll");

        if (element.classList.contains("selected")){
            showNotification(`${product.name} foi removido/a!`);

            element.classList.remove("selected");
            button.textContent = "Selecionar";

            const index = cart.findIndex(item => item.id === product.id);
            cart_gomastuboslinnhaslinguas.splice(index, 1);
        }
        else{
            if(nSelected == parseInt(peso.value)*10+(parseInt(peso.value)*10+ 10)){
                // Show a notification at the click position
                showNotification(`Número de gomas selecionadas atingido!`);
            }
            else if(nSelected < parseInt(peso.value)*10+(parseInt(peso.value)*10+ 10)){
                // Show a notification at the click position
                showNotification(`${product.name} foi selecionado/a!`);

                element.classList.add("selected");
                button.textContent = "Remover";

                if(product.id == 1004){
                    const sabor = document.getElementById(`sabores-1004`);
                    product.name += ` [${sabor.value}]`;
                } // TUBOS MULTIFRUTOS ÁCIDOS
                if(product.id == 2004){
                    const sabor = document.getElementById(`sabores-2004`);
                    product.name += ` [${sabor.value}]`;
                } // LINGUAS MULTIFRUTOS

                cart_gomastuboslinnhaslinguas.push(product);
            }
        }

        // Update cart count and popup
        updateCartCount();
        updateCartPopup();
        
    });
});



// HANDLE SELECIONAR TUBOS E LINHAS
document.querySelectorAll('.selecionar-tl').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.getAttribute('data-id');
        const product = products_tuboslinhas.find(item => item.id == productId);

        const select_sabor = document.getElementById(`sabores-${productId}`);
        let tempname = select_sabor ? `${product.name} [${select_sabor.value}]` : `${product.name}`;

        let found = false;

        cart.forEach(cartItem => {
            if(tempname == cartItem.name){
                cartItem.quantity += 1;
                found = true;
            }
        });

        if(!found){
            const copyProduct = {...product};
            if (copyProduct.quantity == 0){
                copyProduct.name = `${copyProduct.name}${select_sabor ? ` [${select_sabor.value}]` : ''}`;
                copyProduct.quantity += 1;
                cart.push(copyProduct);
            }
        }


        showNotification(`${product.name} foi adicionado/a!`);

        // Update cart count and popup
        updateCartCount();
        updateCartPopup();
 
    });
});

// HANDLE SELECIONAR LINGUAS
document.querySelectorAll('.selecionar-li').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.getAttribute('data-id');
        const product = products_linguas.find(item => item.id == productId);

        const select_sabor = document.getElementById(`sabores-${productId}`);
        let tempname = select_sabor ? `${product.name} [${select_sabor.value}]` : `${product.name}`;

        let found = false;

        cart.forEach(cartItem => {
            if(tempname == cartItem.name){
                cartItem.quantity += 1;
                found = true;
            }
        });

        if(!found){
            const copyProduct = {...product};
            if (copyProduct.quantity == 0){
                copyProduct.name = `${copyProduct.name}${select_sabor ? ` [${select_sabor.value}]` : ''}`;
                copyProduct.quantity += 1;
                cart.push(copyProduct);
            }
        }


        showNotification(`${product.name} foi adicionado/a!`);

        // Update cart count and popup
        updateCartCount();
        updateCartPopup();
 
    });
});

//HANDLE SELECIONAR PASTILHAS
document.querySelectorAll('.selecionar-pa').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.getAttribute('data-id');
        const product = products_pastilhas.find(item => item.id == productId);

        const select_sabor = document.getElementById(`sabores-${productId}`);
        let tempname = select_sabor ? `${product.name} [${select_sabor.value}]` : `${product.name}`;

        let found = false;

        cart.forEach(cartItem => {
            if(tempname == cartItem.name){
                cartItem.quantity += 1;
                found = true;
            }
        });

        if(!found){
            const copyProduct = {...product};
            if (copyProduct.quantity == 0){
                copyProduct.name = `${copyProduct.name}${select_sabor ? ` [${select_sabor.value}]` : ''}`;
                copyProduct.quantity += 1;
                cart.push(copyProduct);
            }
        }


        showNotification(`${product.name} foi adicionado/a!`);

        // Update cart count and popup
        updateCartCount();
        updateCartPopup();
 
    });
});

//HANDLE SELECIONAR GOMAS XXL
document.querySelectorAll('.selecionar-xxl').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.getAttribute('data-id');
        const product = products_gomasxxl.find(item => item.id == productId);
        

        product.quantity += 1;

        if (product.quantity == 1){
            cart.push(product);
        }

        showNotification(`${product.name} foi adicionado/a!`);

        // Update cart count and popup
        updateCartCount();
        updateCartPopup();
 
    });
});

// HANDLE SELECIONAR GOMAS PICANTES
document.querySelectorAll('.selecionar-pic').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.getAttribute('data-id');
        const product = products_gomaspicantes.find(item => item.id == productId);
        

        product.quantity += 1;

        if (product.quantity == 1){
            cart.push(product);
        }

        showNotification(`${product.name} foi adicionado/a!`);

        // Update cart count and popup
        updateCartCount();
        updateCartPopup();
 
    });
});

// HANDLE SELECIONAR MARSHMALLOWS
document.querySelectorAll('.selecionar-ma').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.getAttribute('data-id');
        const product = products_marshmallows.find(item => item.id == productId);

        const select_sabor = document.getElementById(`sabores-${productId}`);
        let tempname = select_sabor ? `${product.name} [${select_sabor.value}]` : `${product.name}`;

        let found = false;

        cart.forEach(cartItem => {
            if(tempname == cartItem.name){
                cartItem.quantity += 1;
                found = true;

                if(cartItem.id == 6005)
                    if(cartItem.quantity >= 10)
                        cartItem.price = 0.12
                if(cartItem.id == 6006)
                    if(cartItem.quantity >= 10)
                        cartItem.price = 0.12
                if(cartItem.id == 6007)
                    if(cartItem.quantity >= 5)
                        cartItem.price = 0.30
                
            }
        });

        if(!found){
            const copyProduct = {...product};
            if (copyProduct.quantity == 0){
                copyProduct.name = `${copyProduct.name}${select_sabor ? ` [${select_sabor.value}]` : ''}`;
                copyProduct.quantity += 1;
                cart.push(copyProduct);
            }
        }


        showNotification(`${product.name} foi adicionado/a!`);

        // Update cart count and popup
        updateCartCount();
        updateCartPopup();
 
    });
});

// HANDLE SELECIONAR CHOCOLATES
document.querySelectorAll('.selecionar-cho').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.getAttribute('data-id');
        const product = products_chocolates.find(item => item.id == productId);
        

        product.quantity += 1;

        if (product.quantity == 1){
            cart.push(product);
        }

        showNotification(`${product.name} foi adicionado/a!`);

        // Update cart count and popup
        updateCartCount();
        updateCartPopup();
 
    });
});

// HANDLE SELECIONAR BOXES
document.querySelectorAll('.selecionar-box').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.getAttribute('data-id');
        const price = document.getElementById('preço-box');
        const price_degustacao = document.getElementById('preço-box2');
        
        if(productId == 8001){
            const product = {...products_boxs.find(item => item.id == productId)};
            product.price = parseFloat(price.value);
            product.peso = parseInt(price.value)*10;
            product.quantity = 1;
            cart.push(product);
            showNotification(`${product.name} foi adicionado/a!`);
        }
        else if(productId == 8003){
            const product = {...products_boxs.find(item => item.id == productId)};
            product.price = price_degustacao.value == "1" ? 13 : 23;
            product.quantity = 1;
            product.peso = price_degustacao.value == "1" ? 1000 : 2300;
            product.name += price_degustacao.value == "1" ? " (1 goma)" : " (2 gomas)";
            cart.push(product);
            showNotification(`${product.name} foi adicionado/a!`);
        }
        else{
            const product = products_boxs.find(item => item.id == productId);
            if(product.quantity == 0){
                cart.push(product);
            }
            product.quantity += 1;
            showNotification(`${product.name} foi adicionado/a!`);
        }

        
        // Update cart count and popup
        updateCartCount();
        updateCartPopup();
 
    });
});

// HANDLE SELECIONAR OUTROS
document.querySelectorAll('.selecionar-outros').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.getAttribute('data-id');
        const product = products_outros.find(item => item.id == productId);

        const select_sabor = document.getElementById(`sabores-${productId}`);
        let tempname = select_sabor ? `${product.name} [${select_sabor.value}]` : `${product.name}`;

        let found = false;

        cart.forEach(cartItem => {
            if(tempname == cartItem.name){
                cartItem.quantity += 1;
                found = true;

                if(cartItem.id == 9018)
                    if(cartItem.quantity == 5)
                        cartItem.quantity += 1; // OFERECE 1
            }
        });

        if(!found){
            const copyProduct = {...product};
            if (copyProduct.quantity == 0){
                copyProduct.name = `${copyProduct.name}${select_sabor ? ` [${select_sabor.value}]` : ''}`;
                copyProduct.quantity += 1;
                cart.push(copyProduct);
            }
        }


        showNotification(`${product.name} foi adicionado/a!`);

        // Update cart count and popup
        updateCartCount();
        updateCartPopup();
 
    });
});

// HANDLE SELECIONAR NAMORADOS
document.querySelectorAll('.add-cart-btn').forEach(button => {
    button.addEventListener('click', function() {
        const nome = document.getElementById('boxSelector');
        const product = products_namorados.find(item => item.name == nome.value);

        product.quantity += 1;

        if (product.quantity == 1){
            cart.push(product);
        }

        showNotification(`Caixa ${product.name} foi adicionada!`);

        // Update cart count and popup
        updateCartCount();
        updateCartPopup();
 
    });
});




// SACOS PLÁSTICO
function toggleInput() {
    var checkbox = document.getElementById("sacoINDIVIDUAL");
    var quantityInput = document.getElementById("quantity");
    
    if (checkbox.checked) {
        quantityInput.disabled = false; // Enable the input
        quantityInput.value = 1; // Set default value to 1

        // Add "saco individual" to the cart if not already there
        const saco = products_gomas.find(item => item.id === 99999); // Find the product
        const cartItem = cart.find(item => item.id === saco.id);
        if (cartItem) {
            cartItem.quantity = parseInt(quantityInput.value); // Update the quantity
        } else {
            cart.push({ ...saco, quantity: 1 }); // Add to the cart
        }
    } else {
        quantityInput.disabled = true; // Disable the input
        quantityInput.value = ''; // Clear the value

        // Remove "saco individual" from the cart
        const index = cart.findIndex(item => item.id === 99999);
        if (index > -1) {
            cart.splice(index, 1); // Remove the item from the cart
        }
    }

    // Update cart UI
    updateCartPopup();
    updateCartCount();
}

function updateNSacos() {
    var quantityInput = document.getElementById("quantity");

    if (!quantityInput.disabled && quantityInput.value) {
        const quantity = parseInt(quantityInput.value);
        const saco = products_gomas.find(item => item.id === 99999); // Find the product
        const cartItem = cart.find(item => item.id === saco.id);

        if (cartItem) {
            cartItem.quantity = quantity; // Update the quantity
        } else {
            cart.push({ ...saco, quantity: quantity }); // Add to the cart
        }
    }

    // Update cart UI
    updateCartPopup();
    updateCartCount();
}


// PDF
function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const pageWidth = doc.internal.pageSize.getWidth();

    // Add logo image to the top right corner
    const logoUrl = 'images/logo.png'; // Replace with the path to your logo
    const logoWidth = 120; // Set the width of the logo (you can adjust this)
    const logoHeight = 25; // Set the height of the logo (you can adjust this)
    const xPositionLogo = (pageWidth/2) - (logoWidth/2); 
    const yPositionLogo = 10; // 10px from the top edge

    doc.addImage(logoUrl, 'PNG', xPositionLogo, yPositionLogo, logoWidth, logoHeight);

    const total = document.getElementById("total-price");

    let yOffset = 50; // Starting Y position for the content

    // Add title for the personal details
    doc.setFontSize(16);
    doc.text('Detalhes Pessoais', 10, yOffset);
    yOffset += 15;

    // Get user inputs
    let name = document.getElementById('user-name').value;
    let name2 = document.getElementById('user-name2').value;
    let email = document.getElementById('user-email').value;
    let country = document.getElementById('user-country').value;
    let address = document.getElementById('user-address').value;
    let postalcode = document.getElementById('user-postalcode').value;
    let phone = document.getElementById('user-phone').value;

    // Add personal details to the PDF
    doc.setFontSize(12);
    doc.text(`Nome: ${name} ${name2}`, 10, yOffset); yOffset += 6;
    doc.text(`Email: ${email}`, 10, yOffset); yOffset += 6;
    doc.text(`País: ${country}`, 10, yOffset); yOffset += 6;
    doc.text(`Morada: ${address}`, 10, yOffset); yOffset += 6;
    doc.text(`Código Postal: ${postalcode}`, 10, yOffset); yOffset += 6;
    doc.text(`Telefone: ${phone}`, 10, yOffset); yOffset += 15;



    // Add title for the cart items
    doc.setFontSize(16);
    doc.text('Carrinho', 10, yOffset);
    yOffset += 15;

    // Add product details
    cart.forEach(item => {
        doc.setFontSize(12);
        
        if(item.id >= 10000 && item.id <= 20000){   // GOMAS AO KILO
            // Center product name
            const productName = item.name;
            const priceText = `${item.price.toFixed(2)}€`;

            const finalText = productName + ' : ' + priceText;
            const finalTextWidth = doc.getTextWidth(finalText);
            doc.text(finalText, (pageWidth - finalTextWidth) / 2, yOffset); // Center product name

            if(item.gomas){
                yOffset += 10;
            }
            
            // If we reach near the bottom of the page, create a new page
            if (yOffset > 250) {
                doc.addPage();
                yOffset = 10;
            }

            if(item.gomas){
                item.gomas.forEach(item_goma => {
                    // Center product name
                    const productName = item_goma.name;
                    const productNameWidth = doc.getTextWidth(productName);
                    doc.text(productName, (pageWidth - productNameWidth) / 2, yOffset); // Center product name

                    yOffset += 5;

                    // If we reach near the bottom of the page, create a new page
                    if (yOffset > 269) {
                        doc.addPage();
                        yOffset = 10;
                    }
                })
            }

            yOffset += 10;
        }
        else{

            // Center product name
            const productName = item.name;
            const priceText = `${item.price.toFixed(2)}€${item.quantity > 1 ? ` x ${item.quantity}` : ''}`;

            const finalText = productName + ' : ' + priceText;
            const finalTextWidth = doc.getTextWidth(finalText);
            doc.text(finalText, (pageWidth - finalTextWidth) / 2, yOffset); // Center product name

            yOffset += 10;

            // If we reach near the bottom of the page, create a new page
            if (yOffset > 250) {
                doc.addPage();
                yOffset = 10;
            }
        }
    });

    // Add total price at the end
    yOffset += 8;
    let endtext = '';
    doc.setFontSize(13);
    if(desconto_aplicado){
        endtext = `Desconto "${nome_desconto_aplicado}" [${percentagem_desconto}%] aplicado`;
    }
    endtext += ' | ';
    endtext += `${total.textContent}    `;
    doc.text(endtext, (pageWidth - doc.getTextWidth(endtext) - 10), yOffset);

    yOffset +=5;
    doc.text(compra_status == 1 ? 'Encomenda' : 'Em mão', (pageWidth - doc.getTextWidth(compra_status == 1 ? 'Encomenda' : 'Em mão') - 10), yOffset);

    cart = [];
    cart_gomasKilo = [];
    cart_tuboslinhaslinguas = [];
    cart_gomastuboslinnhaslinguas = [];
    name = '';
    email = '';
    country = '';
    address = '';
    postalcode= '';
    phone= '';

    // Download the PDF
    doc.save('carrinho-gomasdalau.pdf');


    updateCartCount();
    updateCartPopup();

    // Save PDF as Blob and create a download URL
    const pdfBlob = doc.output("blob");
    const pdfUrl = URL.createObjectURL(pdfBlob);

    // Create a WhatsApp share link
    const message = encodeURIComponent("Quero realizar uma compra. Vou enviar o pdf do meu carrinho!");
    const whatsappUrl = `https://wa.me/351934456979?text=${message}`;

    // Open WhatsApp sharing window
    window.open(whatsappUrl, "_blank");
}



 // SEARCH BAR
 function searchProducts() {
    let input = document.getElementById('search-bar').value.toLowerCase();  // Get the input value
    let products_gomas = document.querySelectorAll('.produto');  // Get all product elements

    products_gomas.forEach(function(product) {
        let name = product.querySelector('.nome').textContent.toLowerCase();  // Get the product name
        //let description = product.querySelector('.descricao').textContent.toLowerCase();  // Get the product description
        
        // Check if the input matches the name or description of the product
        if (name.includes(input) /*|| description.includes(input)*/) {
            product.style.display = 'block';  // Show the product if there's a match
        } else {
            product.style.display = 'none';  // Hide the product if no match
        }
    });
}

// VER MAIS e MENU
document.addEventListener("DOMContentLoaded", () => {
    const produtos = document.querySelectorAll(".produto");
    const botaoVerMais = document.getElementById("ver-mais");
    const produtosPorClique = 15;
    let produtosVisiveis = 0;

    // Inicialmente, mostra apenas os primeiros 12 produtos
    const atualizarVisibilidade = () => {
        produtos.forEach((produto, index) => {
            if (index < produtosVisiveis) {
                produto.classList.remove("hidden");
            } else {
                produto.classList.add("hidden");
            }
        });

        // Se todos os produtos estiverem visíveis, esconde o botão
        if (produtosVisiveis >= produtos.length) {
            botaoVerMais.style.display = "none";
        }
    };

    // Configura a visibilidade inicial
    produtosVisiveis = Math.min(produtosPorClique, produtos.length);
    atualizarVisibilidade();

    botaoVerMais.addEventListener("click", () => {
        // Mostra mais 12 produtos
        produtosVisiveis += produtosPorClique;
        atualizarVisibilidade();
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('menu-toggle');
    const menuContent = document.getElementById('menu-content');

    toggleButton.addEventListener('click', function () {
        menuContent.classList.toggle('active');
    });
});



// NOTIFICAÇÃO
let currentNotification = null;

function showNotification(message) {
    // Remove the previous notification if it exists
    if (currentNotification) {
        currentNotification.remove();
    }

    // Create a new notification
    const notification = document.createElement('div');
    notification.classList.add('click-notification');
    notification.textContent = message;

    document.body.appendChild(notification);
    currentNotification = notification;

    // Fade out the notification and remove it
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(-50%) translateY(-20px)';
    }, 1000);

    setTimeout(() => {
        notification.remove();
        currentNotification = null; // Reset the current notification after removal
    }, 2000);
}


// ADICIONAR DADOS
const cartView = document.getElementById('cart-view');
const detailsView = document.getElementById('details-view');
const cartTitle = document.getElementById('cart-title');
const downloadBtn = document.getElementById('download-pdf-btn');

// Switch to "Adicionar dados" view
function switchToDetails() {
    const price = document.getElementById('total-price2');
    price.textContent = document.getElementById('total-price').textContent;

    cartTitle.textContent = 'Adicionar dados 📝';
    cartView.style.display = 'none';
    detailsView.style.display = 'block';

    const downloadbtn = document.getElementById('download-pdf-btn');
    downloadbtn.disabled = false;
    
}

// Switch back to "Carrinho" view
function switchToCart() {
    cartTitle.textContent = 'Carrinho 🛒';
    detailsView.style.display = 'none';
    cartView.style.display = 'block';
}




function applyDiscount(){
    const code = document.getElementById('desconto').value;

    if (desconto_aplicado){
        showNotification(`Desconto já aplicado!`);
    }
    else{
        showNotification(`Código de desconto inválido!`);
    }

    codigos_desconto.forEach(codigo => {
        if (codigo.code.toUpperCase() === code.toUpperCase() && !desconto_aplicado) {
            const total = document.getElementById('total-price');
            const total2 = document.getElementById('total-price2');

            const totalValue = parseFloat(total.textContent.split(' ')[1].replace('€', ''));
            const discount = totalValue * codigo.discount / 100;

            total.textContent = `Total: ${(totalValue - discount).toFixed(2)}€`;
            total2.textContent = `Total: ${(totalValue - discount).toFixed(2)}€`;

            percentagem_desconto = codigo.discount;

            desconto_aplicado = true; 
            nome_desconto_aplicado = code;

            showNotification(`Desconto de ${percentagem_desconto}% aplicado!`);
        }
    });

    
}


/* PORTES */
const countries = [
    { name: "Portugal Continental", kg_1: 5, kg_2: 5, kg_3: 5, kg_4: 5, kg_5: 5, kg_6: 6, kg_7: 6, kg_8: 6, kg_9: 6, kg_10: 6, kg_11: 7, kg_12: 7, kg_13: 7, kg_14: 7, kg_15: 7, kg_16: 9, kg_17: 9, kg_18: 9, kg_19: 9, kg_20: 9},
    { name: "Portugal Ilhas", kg_1: 7.80, kg_2: 7.80, kg_3: 10, kg_4: 10, kg_5: 10, kg_6: 13, kg_7: 13, kg_8: 13, kg_9: 13, kg_10: 13, kg_11: 20, kg_12: 20, kg_13: 20, kg_14: 20, kg_15: 20, kg_16: 20, kg_17: 20, kg_18: 20, kg_19: 20, kg_20: 20},
    { name: "Espanha", kg_1: 0, kg_2: 8, kg_3: 8, kg_4: 8, kg_5: 8, kg_6: 9, kg_7: 9, kg_8: 9, kg_9: 9, kg_10: 9, kg_11: 12.50, kg_12: 12.50, kg_13: 12.50, kg_14: 12.50, kg_15: 12.50, kg_16: 16, kg_17: 16, kg_18: 16, kg_19: 16, kg_20: 16},
    { name: "Alemanha", kg_1: 14.50, kg_2: 15.50, kg_3: 17, kg_4: 18, kg_5: 19.50, kg_6: 25, kg_7: 25, kg_8: 25, kg_9: 25, kg_10: 25, kg_11: 33.50, kg_12: 33.50, kg_13: 33.50, kg_14: 33.50, kg_15: 33.50, kg_16: 42.50, kg_17: 42.50, kg_18: 42.50, kg_19: 42.50, kg_20: 42.50},
    { name: "Áustria", kg_1: 14.50, kg_2: 15.50, kg_3: 17, kg_4: 18, kg_5: 19.50, kg_6: 25, kg_7: 25, kg_8: 25, kg_9: 25, kg_10: 25, kg_11: 33.50, kg_12: 33.50, kg_13: 33.50, kg_14: 33.50, kg_15: 33.50, kg_16: 42.50, kg_17: 42.50, kg_18: 42.50, kg_19: 42.50, kg_20: 42.50},
    { name: "Bélgica", kg_1: 14.50, kg_2: 15.50, kg_3: 17, kg_4: 18, kg_5: 19.50, kg_6: 25, kg_7: 25, kg_8: 25, kg_9: 25, kg_10: 25, kg_11: 33.50, kg_12: 33.50, kg_13: 33.50, kg_14: 33.50, kg_15: 33.50, kg_16: 42.50, kg_17: 42.50, kg_18: 42.50, kg_19: 42.50, kg_20: 42.50},
    { name: "Eslováquia", kg_1: 14.50, kg_2: 15.50, kg_3: 17, kg_4: 18, kg_5: 19.50, kg_6: 25, kg_7: 25, kg_8: 25, kg_9: 25, kg_10: 25, kg_11: 33.50, kg_12: 33.50, kg_13: 33.50, kg_14: 33.50, kg_15: 33.50, kg_16: 42.50, kg_17: 42.50, kg_18: 42.50, kg_19: 42.50, kg_20: 42.50},
    { name: "Eslovénia", kg_1: 14.50, kg_2: 15.50, kg_3: 17, kg_4: 18, kg_5: 19.50, kg_6: 25, kg_7: 25, kg_8: 25, kg_9: 25, kg_10: 25, kg_11: 33.50, kg_12: 33.50, kg_13: 33.50, kg_14: 33.50, kg_15: 33.50, kg_16: 42.50, kg_17: 42.50, kg_18: 42.50, kg_19: 42.50, kg_20: 42.50},
    { name: "França", kg_1: 14.50, kg_2: 15.50, kg_3: 17, kg_4: 18, kg_5: 19.50, kg_6: 25, kg_7: 25, kg_8: 25, kg_9: 25, kg_10: 25, kg_11: 33.50, kg_12: 33.50, kg_13: 33.50, kg_14: 33.50, kg_15: 33.50, kg_16: 42.50, kg_17: 42.50, kg_18: 42.50, kg_19: 42.50, kg_20: 42.50},
    { name: "Grécia", kg_1: 14.50, kg_2: 15.50, kg_3: 17, kg_4: 18, kg_5: 19.50, kg_6: 25, kg_7: 25, kg_8: 25, kg_9: 25, kg_10: 25, kg_11: 33.50, kg_12: 33.50, kg_13: 33.50, kg_14: 33.50, kg_15: 33.50, kg_16: 42.50, kg_17: 42.50, kg_18: 42.50, kg_19: 42.50, kg_20: 42.50},
    { name: "Holanda", kg_1: 14.50, kg_2: 15.50, kg_3: 17, kg_4: 18, kg_5: 19.50, kg_6: 25, kg_7: 25, kg_8: 25, kg_9: 25, kg_10: 25, kg_11: 33.50, kg_12: 33.50, kg_13: 33.50, kg_14: 33.50, kg_15: 33.50, kg_16: 42.50, kg_17: 42.50, kg_18: 42.50, kg_19: 42.50, kg_20: 42.50},
    { name: "Hungria", kg_1: 14.50, kg_2: 15.50, kg_3: 17, kg_4: 18, kg_5: 19.50, kg_6: 25, kg_7: 25, kg_8: 25, kg_9: 25, kg_10: 25, kg_11: 33.50, kg_12: 33.50, kg_13: 33.50, kg_14: 33.50, kg_15: 33.50, kg_16: 42.50, kg_17: 42.50, kg_18: 42.50, kg_19: 42.50, kg_20: 42.50},
    { name: "Irlanda", kg_1: 14.50, kg_2: 15.50, kg_3: 17, kg_4: 18, kg_5: 19.50, kg_6: 25, kg_7: 25, kg_8: 25, kg_9: 25, kg_10: 25, kg_11: 33.50, kg_12: 33.50, kg_13: 33.50, kg_14: 33.50, kg_15: 33.50, kg_16: 42.50, kg_17: 42.50, kg_18: 42.50, kg_19: 42.50, kg_20: 42.50},
    { name: "Itália", kg_1: 14.50, kg_2: 15.50, kg_3: 17, kg_4: 18, kg_5: 19.50, kg_6: 25, kg_7: 25, kg_8: 25, kg_9: 25, kg_10: 25, kg_11: 33.50, kg_12: 33.50, kg_13: 33.50, kg_14: 33.50, kg_15: 33.50, kg_16: 42.50, kg_17: 42.50, kg_18: 42.50, kg_19: 42.50, kg_20: 42.50},
    { name: "Lituânia", kg_1: 14.50, kg_2: 15.50, kg_3: 17, kg_4: 18, kg_5: 19.50, kg_6: 25, kg_7: 25, kg_8: 25, kg_9: 25, kg_10: 25, kg_11: 33.50, kg_12: 33.50, kg_13: 33.50, kg_14: 33.50, kg_15: 33.50, kg_16: 42.50, kg_17: 42.50, kg_18: 42.50, kg_19: 42.50, kg_20: 42.50},
    { name: "República Checa", kg_1: 14.50, kg_2: 15.50, kg_3: 17, kg_4: 18, kg_5: 19.50, kg_6: 25, kg_7: 25, kg_8: 25, kg_9: 25, kg_10: 25, kg_11: 33.50, kg_12: 33.50, kg_13: 33.50, kg_14: 33.50, kg_15: 33.50, kg_16: 42.50, kg_17: 42.50, kg_18: 42.50, kg_19: 42.50, kg_20: 42.50},
    { name: "Dinamarca", kg_1: 15, kg_2: 16.50, kg_3: 19, kg_4:22, kg_5: 23.50, kg_6: 31.50, kg_7: 31.50, kg_8: 31.50, kg_9: 31.50, kg_10: 31.50, kg_11: 45, kg_12: 45, kg_13: 45, kg_14: 45, kg_15: 45, kg_16: 59, kg_17: 59, kg_18: 59, kg_19: 59, kg_20: 59},
    { name: "Estónia", kg_1: 15, kg_2: 16.50, kg_3: 19, kg_4:22, kg_5: 23.50, kg_6: 31.50, kg_7: 31.50, kg_8: 31.50, kg_9: 31.50, kg_10: 31.50, kg_11: 45, kg_12: 45, kg_13: 45, kg_14: 45, kg_15: 45, kg_16: 59, kg_17: 59, kg_18: 59, kg_19: 59, kg_20: 59},
    { name: "Finlândia", kg_1: 15, kg_2: 16.50, kg_3: 19, kg_4:22, kg_5: 23.50, kg_6: 31.50, kg_7: 31.50, kg_8: 31.50, kg_9: 31.50, kg_10: 31.50, kg_11: 45, kg_12: 45, kg_13: 45, kg_14: 45, kg_15: 45, kg_16: 59, kg_17: 59, kg_18: 59, kg_19: 59, kg_20: 59},
    { name: "Letónia", kg_1: 15, kg_2: 16.50, kg_3: 19, kg_4:22, kg_5: 23.50, kg_6: 31.50, kg_7: 31.50, kg_8: 31.50, kg_9: 31.50, kg_10: 31.50, kg_11: 45, kg_12: 45, kg_13: 45, kg_14: 45, kg_15: 45, kg_16: 59, kg_17: 59, kg_18: 59, kg_19: 59, kg_20: 59},
    { name: "Malta", kg_1: 15, kg_2: 16.50, kg_3: 19, kg_4:22, kg_5: 23.50, kg_6: 31.50, kg_7: 31.50, kg_8: 31.50, kg_9: 31.50, kg_10: 31.50, kg_11: 45, kg_12: 45, kg_13: 45, kg_14: 45, kg_15: 45, kg_16: 59, kg_17: 59, kg_18: 59, kg_19: 59, kg_20: 59},
    { name: "Polónia", kg_1: 15, kg_2: 16.50, kg_3: 19, kg_4:22, kg_5: 23.50, kg_6: 31.50, kg_7: 31.50, kg_8: 31.50, kg_9: 31.50, kg_10: 31.50, kg_11: 45, kg_12: 45, kg_13: 45, kg_14: 45, kg_15: 45, kg_16: 59, kg_17: 59, kg_18: 59, kg_19: 59, kg_20: 59},
    { name: "Suécia", kg_1: 15, kg_2: 16.50, kg_3: 19, kg_4:22, kg_5: 23.50, kg_6: 31.50, kg_7: 31.50, kg_8: 31.50, kg_9: 31.50, kg_10: 31.50, kg_11: 45, kg_12: 45, kg_13: 45, kg_14: 45, kg_15: 45, kg_16: 59, kg_17: 59, kg_18: 59, kg_19: 59, kg_20: 59},
]

function calcularPortes(){
    if(compra_status == 1){
        let pesoTotal = 0;
        const countryName = document.getElementById('user-country').value;

        cart.forEach(item => {
            if(item.peso){
                pesoTotal += item.peso * item.quantity;
            }
            else{
                pesoTotal += 10 * item.quantity;
            }
        });

        const country = countries.find(c => c.name === countryName);

        let portes = 0;
        for (let i = 1; i <= 20; i++) {
            if (pesoTotal <= i) {
                portes = country["kg_" + i]; // Corrected syntax
                break;
            }
        }

        const totalPrice = document.getElementById('total-price');
        const totalPrice2 = document.getElementById('total-price2');
        let total = parseFloat(totalPrice.textContent.split(' ')[1].replace('€', ''));
        
        total = total - global_portes + portes;
        global_portes = portes;

        totalPrice.textContent = `Total: ${total.toFixed(2)}€`;
        totalPrice2.textContent = `Total: ${total.toFixed(2)}€`;
    }
}

let global_portes = 0;
let compra_status = 1; // 1 - ENCOMENDA, 0 - MAOSd

function em_mao(){
    const em_mao = document.getElementById('em-mao');

    const totalPrice = document.getElementById('total-price');
    const totalPrice2 = document.getElementById('total-price2');

    let total = parseFloat(totalPrice.textContent.split(' ')[1].replace('€', ''));

    // SWITCH BETWEEN COLORS ON CLICK
    if (compra_status === 0) {
        em_mao.style.backgroundColor = '#FD8D81';
        compra_status = 1;

        const address = document.getElementById('user-address');
        const postal_code = document.getElementById('user-postalcode');
        const country = document.getElementById('user-country');

        address.disabled = false;
        postal_code.disabled = false;
        country.disabled = false;
        
        calcularPortes();
    } else {
        em_mao.style.backgroundColor = '#85E298';
        compra_status = 0;

        total -= global_portes;
        global_portes = 0;

        const address = document.getElementById('user-address');
        const postal_code = document.getElementById('user-postalcode');
        const country = document.getElementById('user-country');
        address.value = '';
        postal_code.value = '';
        country.value = '';
        address.disabled = true;
        postal_code.disabled = true;
        country.disabled = true;

        totalPrice.textContent = `Total: ${total.toFixed(2)}€`;
        totalPrice2.textContent = `Total: ${total.toFixed(2)}€`;
    }

    

    
}




const goToTopButton = document.getElementById("goToTop");

// Mostrar o botão quando o usuário rolar para baixo
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        goToTopButton.style.display = "block";
    } else {
        goToTopButton.style.display = "none";
    }
});

// Scroll suave para o topo
goToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});



// MOSTRAR CARRINHO
document.getElementById('cart-icon').addEventListener('click', function() {
    document.getElementById('cart-popup').style.display = 'flex'; // Show popup
});

// ESCONDER CARRINHO
document.getElementById('close-popup-span').addEventListener('click', function() {
    document.getElementById('cart-popup').style.display = 'none'; // Hide popup
    desconto_aplicado = false;
    const name = document.getElementById('user-name');
    const name2 = document.getElementById('user-name2');
    const email = document.getElementById('user-email');
    const country = document.getElementById('user-country');
    const address = document.getElementById('user-address');
    const postalcode = document.getElementById('user-postalcode');
    const phone = document.getElementById('user-phone');
    const nif = document.getElementById('user-nif');

    name.value = '';
    name2.value = '';
    email.value = '';
    country.value = "";
    address.value = '';
    postalcode.value = '';
    phone.value = '';
    nif.value = '';

    global_portes = 0;
});



// GUARDAR CARRINHO
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('cart_count', document.getElementById('cart-count').textContent);
}
function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('cart');
    const savedCartCount = localStorage.getItem('cart_count');

    if (savedCart) {
        cart = JSON.parse(savedCart);
    } else {
        cart = []; // Se não houver nada salvo, inicia com um array vazio
    }

    if(savedCartCount){
        document.getElementById('cart-count').textContent = savedCartCount;
    }
}
// AO CARRREGAR A PÁGINA, LOAD STORAGE
document.addEventListener("DOMContentLoaded", function() {
    loadCartFromLocalStorage();
    updateCartPopup();
    updateCartCount();
});




document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".produto.indisponivel").forEach(produto => {
        let botao = produto.querySelector(".produto button"); 
        if (botao) {
            let semStock = document.createElement("p");
            semStock.classList.add("sem-stock");
            semStock.textContent = "Sem stock";
            semStock.style.fontFamily = 'Arimo'; // Define a fonte
            semStock.style.fontSize = "18px"; // Ajusta o tamanho
            botao.replaceWith(semStock);
        }
    });
});

// DISABLE DEV TOOLS
/*document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}*/

/*document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};*/