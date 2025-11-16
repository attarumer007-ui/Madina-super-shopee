// Demo grocery store app with products, auth, cart, orders, cancel, themes.
// Data: 60 sample kirana products across categories (Fruits, Vegetables, Dairy, Staples, Snacks, Beverages, Household)
const STORE = {
  name: "Madina Super Shopee",
  owner: "Mr. Ahmed Khan",
  address: "Shop #12, Market Road, Parbhani, Maharashtra - 431401",
  phone: "+91 98765 43210",
  currency: "₹"
};

const PRODUCTS = [
  {id:"p001", title:"Aashirvaad Atta (5 kg)", price:399, category:"Staples", desc:"Whole wheat flour", img:"https://images.unsplash.com/photo-1601050690686-8d0f6e2b68d9?q=80&w=800&auto=format&fit=crop"},
  {id:"p002", title:"Basmati Rice (5 kg)", price:449, category:"Staples", desc:"Aromatic long grain rice", img:"https://images.unsplash.com/photo-1604908177739-5b8a701e7d68?q=80&w=800&auto=format&fit=crop"},
  {id:"p003", title:"Toor Dal (1 kg)", price:160, category:"Staples", desc:"Split pigeon peas", img:"https://images.unsplash.com/photo-1605891924598-1f4a2b5b1b29?q=80&w=800&auto=format&fit=crop"},
  {id:"p004", title:"Masoor Dal (1 kg)", price:140, category:"Staples", desc:"Red lentils", img:"https://images.unsplash.com/photo-1614434819816-2694b3d4b7a9?q=80&w=800&auto=format&fit=crop"},
  {id:"p005", title:"Sunflower Oil (1 L)", price:180, category:"Staples", desc:"Refined cooking oil", img:"https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop"},
  {id:"p006", title:"Sugar (1 kg)", price:45, category:"Staples", desc:"Refined sugar", img:"https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=800&auto=format&fit=crop"},
  {id:"p007", title:"Salt (1 kg)", price:25, category:"Staples", desc:"Iodised salt", img:"https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=800&auto=format&fit=crop"},
  {id:"p008", title:"Tea (250 g)", price:120, category:"Beverages", desc:"Premium tea leaves", img:"https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=800&auto=format&fit=crop"},
  {id:"p009", title:"Coffee Powder (200 g)", price:220, category:"Beverages", desc:"Rich coffee powder", img:"https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop"},
  {id:"p010", title:"Milk (1 L)", price:65, category:"Dairy", desc:"Fresh milk packet", img:"https://images.unsplash.com/photo-1582719478173-6f3d1f6d1b3f?q=80&w=800&auto=format&fit=crop"},
  {id:"p011", title:"Curd (500 g)", price:50, category:"Dairy", desc:"Fresh homemade curd", img:"https://images.unsplash.com/photo-1580910051070-9e3c0a3d9f86?q=80&w=800&auto=format&fit=crop"},
  {id:"p012", title:"Paneer (200 g)", price:120, category:"Dairy", desc:"Soft cottage cheese", img:"https://images.unsplash.com/photo-1589307000226-3fa9b1f6a49d?q=80&w=800&auto=format&fit=crop"},
  {id:"p013", title:"Eggs (12 pcs)", price:120, category:"Dairy", desc:"Farm eggs dozen", img:"https://images.unsplash.com/photo-1582281298050-5f0c28c9b8f4?q=80&w=800&auto=format&fit=crop"},
  {id:"p014", title:"Apples (1 kg)", price:149, category:"Fruits", desc:"Fresh red apples", img:"https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=800&auto=format&fit=crop"},
  {id:"p015", title:"Bananas (1 dozen)", price:60, category:"Fruits", desc:"Ripe bananas", img:"https://images.unsplash.com/photo-1574226516831-e1dff420e37c?q=80&w=800&auto=format&fit=crop"},
  {id:"p016", title:"Oranges (1 kg)", price:120, category:"Fruits", desc:"Juicy oranges", img:"https://images.unsplash.com/photo-1571047389482-9b5a4f5f5a40?q=80&w=800&auto=format&fit=crop"},
  {id:"p017", title:"Grapes (500 g)", price:110, category:"Fruits", desc:"Seedless grapes", img:"https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=800&auto=format&fit=crop"},
  {id:"p018", title:"Tomatoes (1 kg)", price:48, category:"Vegetables", desc:"Fresh tomatoes", img:"https://images.unsplash.com/photo-1572441710266-93b90b8e6f3b?q=80&w=800&auto=format&fit=crop"},
  {id:"p019", title:"Potatoes (2 kg)", price:90, category:"Vegetables", desc:"Good for curries", img:"https://images.unsplash.com/photo-1502741338009-cac2772e18bc?q=80&w=800&auto=format&fit=crop"},
  {id:"p020", title:"Onions (1 kg)", price:55, category:"Vegetables", desc:"Fresh onions", img:"https://images.unsplash.com/photo-1582515073490-3998133d7b3f?q=80&w=800&auto=format&fit=crop"},
  {id:"p021", title:"Green Chillies (100 g)", price:12, category:"Vegetables", desc:"Spicy green chillies", img:"https://images.unsplash.com/photo-1542444459-db2c8d7ad3f3?q=80&w=800&auto=format&fit=crop"},
  {id:"p022", title:"Ginger (100 g)", price:20, category:"Vegetables", desc:"Fresh ginger", img:"https://images.unsplash.com/photo-1542444459-db2c8d7ad3f3?q=80&w=800&auto=format&fit=crop"},
  {id:"p023", title:"Garlic (100 g)", price:20, category:"Vegetables", desc:"Aromatic garlic", img:"https://images.unsplash.com/photo-1510626176961-4b57f5d0b3b5?q=80&w=800&auto=format&fit=crop"},
  {id:"p024", title:"Maska Bread (400 g)", price:40, category:"Bakery", desc:"Fresh bread loaf", img:"https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop"},
  {id:"p025", title:"Maggi Noodles (2 packs)", price:30, category:"Snacks", desc:"Instant noodles", img:"https://images.unsplash.com/photo-1585238342029-5f5e3d1b9b2f?q=80&w=800&auto=format&fit=crop"},
  {id:"p026", title:"Biscuits (Marie)", price:25, category:"Snacks", desc:"Tea-time biscuits", img:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop"},
  {id:"p027", title:"Potato Chips (70 g)", price:20, category:"Snacks", desc:"Crispy chips", img:"https://images.unsplash.com/photo-1505575970816-4f9c0bdfd2c4?q=80&w=800&auto=format&fit=crop"},
  {id:"p028", title:"Cold Drink (1.25 L)", price:70, category:"Beverages", desc:"Popular soft drink", img:"https://images.unsplash.com/photo-1582719478173-6f3d1f6d1b3f?q=80&w=800&auto=format&fit=crop"},
  {id:"p029", title:"Juice (1 L)", price:110, category:"Beverages", desc:"Fruit juice", img:"https://images.unsplash.com/photo-1542444459-db2c8d7ad3f3?q=80&w=800&auto=format&fit=crop"},
  {id:"p030", title:"Toothpaste (100 g)", price:80, category:"Household", desc:"Dental care", img:"https://images.unsplash.com/photo-1581579183223-4c9b2b2d3b3a?q=80&w=800&auto=format&fit=crop"},
  {id:"p031", title:"Toothbrush", price:30, category:"Household", desc:"Soft bristles", img:"https://images.unsplash.com/photo-1581579183223-4c9b2b2d3b3a?q=80&w=800&auto=format&fit=crop"},
  {id:"p032", title:"Dishwash Bar", price:20, category:"Household", desc:"Effective cleaning", img:"https://images.unsplash.com/photo-1561414927-6c8b2a4b7a6d?q=80&w=800&auto=format&fit=crop"},
  {id:"p033", title:"Washing Powder (1 kg)", price:150, category:"Household", desc:"Cleans clothes well", img:"https://images.unsplash.com/photo-1600447851360-9d9b5b6d1a2e?q=80&w=800&auto=format&fit=crop"},
  {id:"p034", title:"Cooking Gas Lighter", price:60, category:"Household", desc:"Kitchen lighter", img:"https://images.unsplash.com/photo-1582719478173-6f3d1f6d1b3f?q=80&w=800&auto=format&fit=crop"},
  {id:"p035", title:"Ketchup (500 g)", price:110, category:"Condiments", desc:"Tomato ketchup", img:"https://images.unsplash.com/photo-1604908177739-5b8a701e7d68?q=80&w=800&auto=format&fit=crop"},
  {id:"p036", title:"Soy Sauce (200 ml)", price:120, category:"Condiments", desc:"For cooking", img:"https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop"},
  {id:"p037", title:"Masala Powder (100 g)", price:40, category:"Spices", desc:"Mixed spices", img:"https://images.unsplash.com/photo-1605891924598-1f4a2b5b1b29?q=80&w=800&auto=format&fit=crop"},
  {id:"p038", title:"Turmeric Powder (100 g)", price:30, category:"Spices", desc:"Pure turmeric", img:"https://images.unsplash.com/photo-1614434819816-2694b3d4b7a9?q=80&w=800&auto=format&fit=crop"},
  {id:"p039", title:"Red Chilli Powder (100 g)", price:30, category:"Spices", desc:"Spicy red chilli", img:"https://images.unsplash.com/photo-1542444459-db2c8d7ad3f3?q=80&w=800&auto=format&fit=crop"},
  {id:"p040", title:"Cooking Soda (500 g)", price:25, category:"Staples", desc:"Useful for baking", img:"https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=800&auto=format&fit=crop"},
  {id:"p041", title:"Soya Chunks (500 g)", price:120, category:"Staples", desc:"Protein rich", img:"https://images.unsplash.com/photo-1600447851360-9d9b5b6d1a2e?q=80&w=800&auto=format&fit=crop"},
  {id:"p042", title:"Olive Oil (500 ml)", price:320, category:"Staples", desc:"Healthy oil", img:"https://images.unsplash.com/photo-1589307000226-3fa9b1f6a49d?q=80&w=800&auto=format&fit=crop"},
  {id:"p043", title:"Honey (250 g)", price:220, category:"Staples", desc:"Natural honey", img:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop"},
  {id:"p044", title:"Peanut Butter (340 g)", price:250, category:"Snacks", desc:"Crunchy peanut butter", img:"https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop"},
  {id:"p045", title:"Soya Sauce (250 ml)", price:130, category:"Condiments", desc:"For seasoning", img:"https://images.unsplash.com/photo-1582719478173-6f3d1f6d1b3f?q=80&w=800&auto=format&fit=crop"},
  {id:"p046", title:"Rusk (200 g)", price:40, category:"Bakery", desc:"Tea-time rusk", img:"https://images.unsplash.com/photo-1502741338009-cac2772e18bc?q=80&w=800&auto=format&fit=crop"},
  {id:"p047", title:"Olives (200 g)", price:180, category:"Condiments", desc:"Jar of olives", img:"https://images.unsplash.com/photo-1571047389482-9b5a4f5f5a40?q=80&w=800&auto=format&fit=crop"},
  {id:"p048", title:"Mango Pulp (500 g)", price:160, category:"Beverages", desc:"Mango juice concentrate", img:"https://images.unsplash.com/photo-1604908177739-5b8a701e7d68?q=80&w=800&auto=format&fit=crop"},
  {id:"p049", title:"Saffola Oats (500 g)", price:180, category:"Staples", desc:"Healthy oats", img:"https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=800&auto=format&fit=crop"},
  {id:"p050", title:"Chocolates (Assorted)", price:300, category:"Snacks", desc:"Assorted chocolates", img:"https://images.unsplash.com/photo-1542444459-db2c8d7ad3f3?q=80&w=800&auto=format&fit=crop"},
  {id:"p051", title:"Mawa (500 g)", price:280, category:"Dairy", desc:"Rich mawa for sweets", img:"https://images.unsplash.com/photo-1582281298050-5f0c28c9b8f4?q=80&w=800&auto=format&fit=crop"},
  {id:"p052", title:"Sliced Bread (400 g)", price:45, category:"Bakery", desc:"Soft sliced bread", img:"https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop"},
  {id:"p053", title:"Paneer Tikka Masala (Ready)", price:220, category:"Ready Meals", desc:"Instant gravy", img:"https://images.unsplash.com/photo-1600447851360-9d9b5b6d1a2e?q=80&w=800&auto=format&fit=crop"},
  {id:"p054", title:"Frozen Peas (500 g)", price:90, category:"Frozen", desc:"Quick to cook peas", img:"https://images.unsplash.com/photo-1582719478173-6f3d1f6d1b3f?q=80&w=800&auto=format&fit=crop"},
  {id:"p055", title:"Frozen Paratha (6 pcs)", price:120, category:"Frozen", desc:"Ready to cook parathas", img:"https://images.unsplash.com/photo-1574226516831-e1dff420e37c?q=80&w=800&auto=format&fit=crop"},
  {id:"p056", title:"Baby Wipes (pack)", price:80, category:"Baby Care", desc:"Soft wipes", img:"https://images.unsplash.com/photo-1561414927-6c8b2a4b7a6d?q=80&w=800&auto=format&fit=crop"},
  {id:"p057", title:"Diapers (M, pack)", price:300, category:"Baby Care", desc:"Comfortable diapers", img:"https://images.unsplash.com/photo-1581579183223-4c9b2b2d3b3a?q=80&w=800&auto=format&fit=crop"},
  {id:"p058", title:"Face Wash", price:120, category:"Personal Care", desc:"Gentle face wash", img:"https://images.unsplash.com/photo-1505575970816-4f9c0bdfd2c4?q=80&w=800&auto=format&fit=crop"},
  {id:"p059", title:"Shampoo (200 ml)", price:150, category:"Personal Care", desc:"Hair care shampoo", img:"https://images.unsplash.com/photo-1604908177739-5b8a701e7d68?q=80&w=800&auto=format&fit=crop"},
  {id:"p060", title:"Handwash (250 ml)", price:90, category:"Personal Care", desc:"Liquid handwash", img:"https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop"}
];

// App state
let state = {
  products: PRODUCTS.slice(),
  cart: load('ms_cart') || {},
  users: load('ms_users') || {},
  currentUser: load('ms_currentUser') || null,
  orders: load('ms_orders') || []
};

function save(key, value){ localStorage.setItem(key, JSON.stringify(value)); }
function load(key){ try{ return JSON.parse(localStorage.getItem(key)); }catch(e){return null;} }

function formatMoney(n){ return STORE.currency + Number(n).toLocaleString('en-IN', {maximumFractionDigits:2, minimumFractionDigits:2}); }

// Render categories
function renderCategories(){
  const cats = ["All", ...new Set(state.products.map(p=>p.category))];
  const catSel = document.getElementById('categoryFilter');
  const catList = document.getElementById('categoryList');
  catSel.innerHTML = '<option value="All">All categories</option>';
  catList.innerHTML = '';
  cats.forEach(c=>{
    const opt = document.createElement('option'); opt.value = c; opt.textContent = c; catSel.appendChild(opt);
    const li = document.createElement('li'); li.innerHTML = `<button class="btn ghost catBtn" data-cat="${c}">${c}</button>`; catList.appendChild(li);
  });
  document.querySelectorAll('.catBtn').forEach(btn=>btn.onclick = ()=>{ document.getElementById('categoryFilter').value = btn.dataset.cat; filterAndRender(); });
}

// Render products
function renderProducts(list){
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = '';
  (list || state.products).forEach(p=>{
    const card = document.createElement('div'); card.className = 'card';
    card.innerHTML = `
      <div class="thumb" style="background-image:url('${p.img}')"></div>
      <div class="meta"><div class="title">${p.title}</div><div class="price">${formatMoney(p.price)}</div></div>
      <div class="desc">${p.desc} • <span class="small">${p.category}</span></div>
      <div style="margin-top:auto;display:flex;justify-content:space-between;align-items:center">
        <div><input type="number" min="1" value="1" class="qty" data-id="${p.id}" style="width:60px;padding:6px;border-radius:6px;border:1px solid #e6eef0" /></div>
        <div><button class="btn addBtn" data-id="${p.id}">Add to cart</button></div>
      </div>
    `;
    grid.appendChild(card);
  });

  document.querySelectorAll('.addBtn').forEach(b=>{
    b.onclick = ()=>{ const id = b.dataset.id; const qtyInput = document.querySelector(`.qty[data-id="${id}"]`); addToCart(id, Number(qtyInput.value||1)); };
  });
}

// Cart functions
function addToCart(id, qty=1){
  const p = state.products.find(x=>x.id===id); if(!p) return;
  if(!state.cart[id]) state.cart[id] = { ...p, qty:0 };
  state.cart[id].qty += qty;
  if(state.cart[id].qty <= 0) delete state.cart[id];
  save('ms_cart', state.cart);
  renderCart();
}

function updateCartQty(id, delta){
  if(!state.cart[id]) return;
  state.cart[id].qty += delta;
  if(state.cart[id].qty <= 0) delete state.cart[id];
  save('ms_cart', state.cart);
  renderCart();
}

function removeFromCart(id){
  delete state.cart[id];
  save('ms_cart', state.cart);
  renderCart();
}

function clearCart(){ state.cart = {}; save('ms_cart', state.cart); renderCart(); }

// Render cart
function renderCart(){
  document.getElementById('cartCount').textContent = Object.values(state.cart).reduce((s,i)=>s+i.qty,0);
  document.getElementById('cartTotal').textContent = formatMoney(cartTotal());
  const items = document.getElementById('cartItems'); items.innerHTML = '';
  if(Object.keys(state.cart).length === 0){ items.innerHTML = '<div class="small">Cart is empty</div>'; return; }
  Object.values(state.cart).forEach(item=>{
    const row = document.createElement('div'); row.className='cart-item';
    row.innerHTML = `<img src="${item.img}" alt="${item.title}"/><div style="flex:1"><strong>${item.title}</strong><div class="small">${item.qty} × ${formatMoney(item.price)}</div></div>
      <div style="text-align:right"><div style="font-weight:800">${formatMoney(item.qty*item.price)}</div>
      <div style="margin-top:6px"><button class="btn ghost" data-op="dec" data-id="${item.id}">-</button>
      <button class="btn ghost" data-op="inc" data-id="${item.id}">+</button>
      <button class="btn ghost" data-op="rem" data-id="${item.id}">Remove</button></div></div>`;
    items.appendChild(row);
  });
  document.querySelectorAll('[data-op]').forEach(b=>b.onclick = ()=>{
    const op = b.dataset.op, id = b.dataset.id;
    if(op==='inc') updateCartQty(id,1);
    if(op==='dec') updateCartQty(id,-1);
    if(op==='rem') removeFromCart(id);
  });
  document.getElementById('cartCount').textContent = Object.values(state.cart).reduce((s,i)=>s+i.qty,0);
}

// totals
function cartTotal(){ return Object.values(state.cart).reduce((s,i)=>s + (i.qty*i.price),0); }

// Auth (demo local)
function openAuth(mode='login'){ document.getElementById('authModal').classList.add('open'); document.getElementById('authTitle').textContent = mode==='login' ? 'Login' : 'Sign Up'; document.getElementById('authName').style.display = mode==='signup' ? 'block' : 'none'; document.getElementById('switchAuth').textContent = mode==='login' ? 'Switch to Sign up' : 'Switch to Login'; document.getElementById('authSubmit').dataset.mode = mode; }
function closeAuth(){ document.getElementById('authModal').classList.remove('open'); }
function submitAuth(){
  const mode = document.getElementById('authSubmit').dataset.mode;
  const name = document.getElementById('authName').value.trim();
  const email = document.getElementById('authEmail').value.trim();
  const pass = document.getElementById('authPass').value;
  if(!email || !pass){ alert('Enter email/phone and password'); return; }
  if(mode==='signup'){
    if(state.users[email]){ alert('User exists. Please login.'); return; }
    state.users[email] = { name: name || email.split('@')[0], email, pass };
    save('ms_users', state.users);
    state.currentUser = { email, name: state.users[email].name };
    save('ms_currentUser', state.currentUser);
    closeAuth(); updateAuthUI();
    alert('Signup successful (demo).');
  } else {
    if(!state.users[email] || state.users[email].pass !== pass){ alert('Invalid credentials'); return; }
    state.currentUser = { email, name: state.users[email].name };
    save('ms_currentUser', state.currentUser);
    closeAuth(); updateAuthUI();
    alert('Login successful.');
  }
}

function logout(){
  state.currentUser = null; localStorage.removeItem('ms_currentUser'); updateAuthUI();
}

// Orders
function openOrders(){ document.getElementById('ordersModal').classList.add('open'); renderOrders(); }
function closeOrders(){ document.getElementById('ordersModal').classList.remove('open'); }
function placeOrder(){
  if(Object.keys(state.cart).length===0){ alert('Cart is empty'); return; }
  const name = document.getElementById('custName').value.trim() || (state.currentUser && state.currentUser.name) || '';
  const phone = document.getElementById('custPhone').value.trim() || '';
  const addr = document.getElementById('custAddress').value.trim() || STORE.address;
  if(!name || !phone || !addr){ alert('Please fill name, phone and address'); return; }
  const order = {
    id: 'ORD' + Date.now(),
    createdAt: new Date().toISOString(),
    customer: { name, phone, addr },
    items: Object.values(state.cart),
    total: cartTotal(),
    status: 'Placed'
  };
  state.orders.push(order);
  save('ms_orders', state.orders);
  state.cart = {}; save('ms_cart', state.cart);
  renderCart(); renderOrders(); closeCheckout();
  alert('Order placed (demo). You can cancel it from orders list.');
}

function renderOrders(){
  document.getElementById('ordersCount').textContent = state.orders.length;
  const el = document.getElementById('ordersList'); el.innerHTML = '';
  if(state.orders.length===0){ el.innerHTML = '<div class="small">No orders yet.</div>'; return; }
  state.orders.slice().reverse().forEach(o=>{
    const card = document.createElement('div'); card.className='card';
    card.innerHTML = `<div style="display:flex;justify-content:space-between"><div><strong>${o.id}</strong><div class="small">${new Date(o.createdAt).toLocaleString()}</div></div>
      <div><strong>${formatMoney(o.total)}</strong></div></div>
      <div style="margin-top:8px"><strong>To:</strong> ${o.customer.name}, ${o.customer.phone}</div>
      <div class="small">${o.customer.addr}</div>
      <div style="margin-top:8px">${o.items.map(it=>`<div class="small">${it.title} × ${it.qty} — ${formatMoney(it.price*it.qty)}</div>`).join('')}</div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px"><div class="small">Status: <strong>${o.status}</strong></div>
      <div>${o.status!=='Cancelled' ? `<button class="btn ghost cancelBtn" data-id="${o.id}">Cancel Order</button>` : ''}</div></div>`;
    el.appendChild(card);
  });
  document.querySelectorAll('.cancelBtn').forEach(b=>b.onclick = ()=>{ cancelOrder(b.dataset.id); });
}

function cancelOrder(id){
  const idx = state.orders.findIndex(o=>o.id===id);
  if(idx===-1) return;
  if(!confirm('Cancel this order?')) return;
  state.orders[idx].status = 'Cancelled';
  save('ms_orders', state.orders);
  renderOrders();
  alert('Order cancelled (demo).');
}

// Export order JSON
function exportCurrentOrder(){
  const obj = { store: STORE, orders: state.orders };
  const blob = new Blob([JSON.stringify(obj, null, 2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = 'madina_orders.json'; a.click();
  URL.revokeObjectURL(url);
}

// Filters & search
function filterAndRender(){
  const q = document.getElementById('search').value.trim().toLowerCase();
  const cat = document.getElementById('categoryFilter').value;
  let list = state.products.filter(p=>{
    if(cat !== 'All' && p.category !== cat) return false;
    if(q && !(p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q))) return false;
    return true;
  });
  const sort = document.getElementById('sortBy').value;
  if(sort==='price-asc') list.sort((a,b)=>a.price-b.price);
  if(sort==='price-desc') list.sort((a,b)=>b.price-a.price);
  renderProducts(list);
}

// Theme
function applyTheme(name){
  document.documentElement.classList.remove('theme-blue','theme-orange','theme-dark');
  if(name==='blue') document.documentElement.classList.add('theme-blue');
  if(name==='orange') document.documentElement.classList.add('theme-orange');
  if(name==='dark') document.documentElement.classList.add('theme-dark');
  localStorage.setItem('ms_theme', name);
}

// UI helpers
function openCart(){ document.getElementById('cartPanel').style.display = 'block'; }
function closeCart(){ document.getElementById('cartPanel').style.display = 'none'; }
function openCheckout(){ document.getElementById('checkoutModal').classList.add('open'); document.getElementById('checkoutSummary').innerHTML = `<div class="small">Items: ${Object.values(state.cart).length}</div><div class="small">Total: <strong>${formatMoney(cartTotal())}</strong></div>`; }
function closeCheckout(){ document.getElementById('checkoutModal').classList.remove('open'); }
function updateAuthUI(){
  if(state.currentUser){
    document.getElementById('authBox').style.display='none';
    document.getElementById('userInfo').style.display='flex';
    document.getElementById('userNameShow').textContent = state.currentUser.name;
  } else {
    document.getElementById('authBox').style.display='flex';
    document.getElementById('userInfo').style.display='none';
  }
}

// Init
(function init(){
  document.getElementById('storeName').textContent = STORE.name;
  renderCategories();
  renderProducts();
  renderCart();
  updateAuthUI();
  document.getElementById('cartBtn').onclick = ()=>{ openCart(); };
  document.getElementById('closeCart').onclick = ()=>{ closeCart(); };
  document.getElementById('clearCart').onclick = ()=>{ if(confirm('Clear cart?')) clearCart(); };
  document.getElementById('checkout').onclick = ()=>{ if(!state.currentUser){ alert('Please login to checkout'); openAuth('login'); return; } openCheckout(); };
  document.getElementById('closeCheckout').onclick = ()=>{ closeCheckout(); };
  document.getElementById('placeOrder').onclick = placeOrder;
  document.getElementById('exportOrder').onclick = exportCurrentOrder;
  document.getElementById('search').addEventListener('input', filterAndRender);
  document.getElementById('categoryFilter').addEventListener('change', filterAndRender);
  document.getElementById('sortBy').addEventListener('change', filterAndRender);

  // auth
  document.getElementById('loginBtn').onclick = ()=>openAuth('login');
  document.getElementById('signupBtn').onclick = ()=>openAuth('signup');
  document.getElementById('closeAuth').onclick = ()=>closeAuth();
  document.getElementById('authSubmit').onclick = submitAuth;
  document.getElementById('switchAuth').onclick = ()=>{
    const mode = document.getElementById('authSubmit').dataset.mode === 'login' ? 'signup' : 'login';
    openAuth(mode);
  };
  document.getElementById('logoutBtn').onclick = ()=>{ if(confirm('Logout?')) logout(); };

  // orders modal
  document.getElementById('ordersBtn').onclick = ()=>{ if(!state.currentUser){ alert('Please login to view orders'); openAuth('login'); return; } openOrders(); };
  document.getElementById('closeOrders').onclick = ()=>closeOrders();

  // auth modal close
  document.getElementById('closeAuth').onclick = ()=>closeAuth();

  // theme
  document.getElementById('themeBtn').onclick = ()=>{ alert('Use the theme selector at the footer to change colors.'); };
  document.getElementById('themeSelect').addEventListener('change', (e)=>applyTheme(e.target.value));
  const savedTheme = localStorage.getItem('ms_theme') || 'green';
  document.getElementById('themeSelect').value = savedTheme;
  applyTheme(savedTheme);

  // quick actions
  document.getElementById('quickCheckout').onclick = ()=>{ if(Object.keys(state.cart).length===0){ alert('Add items to cart first'); return; } if(!state.currentUser){ openAuth('login'); return; } openCheckout(); };

  // attach cart quantity controls will be handled in renderCart
})();
