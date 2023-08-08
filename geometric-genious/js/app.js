let count = 0;
//triangle
document.getElementById('tBtn').addEventListener('click', function () {
  count += 1;
  let t1 = document.getElementById('t1');
  let t1Str = t1.value;
  let t1Int = parseInt(t1Str);

  let t2 = document.getElementById('t2');
  let t2Str = t2.value;
  let t2Int = parseInt(t2Str);
  
  if(!isNaN(t1Str) && !isNaN(t2Str)){
    let total = 0.5 * (t1Int * t2Int);
    let tbody = document.getElementById('tbody');
  let tr = document.createElement('tr');
  tr.innerHTML = `
  <th scope="row">${count}</th>
  <th>Triangle</th>
  <td>${total}</td>
  <td><button class='btn btn-success btn-sm'>click</button></td>
  `;
  tbody.appendChild(tr);
  }
});

//rectangle
document.getElementById('rBtn').addEventListener('click', function () {
  count += 1;
  let r1 = document.getElementById('r1');
  let r1Str = r1.value;
  let r1Int = parseInt(r1Str);

  let r2 = document.getElementById('r2');
  let r2Str = r2.value;
  let r2Int = parseInt(r2Str);

  if(!isNaN(r1Str) && !isNaN(r2Str)){
    let total = (r1Int * r2Int);
    let tbody = document.getElementById('tbody');
  let tr = document.createElement('tr');
  tr.innerHTML = `
  <th scope="row">${count}</th>
  <th>Rectangle</th>
  <td>${total}</td>
  <td><button class='btn btn-success btn-sm'>click</button></td>
  `;
  tbody.appendChild(tr);
  }
});

//Parallelogram
document.getElementById('pBtn').addEventListener('click', function(){
  count += 1;
  let p1 = document.getElementById('p1');
  let p1Str = p1.value;
  let p1Int = parseInt(p1Str);

  let p2 = document.getElementById('p2');
  let p2Str = p2.value;
  let p2Int = parseInt(p2Str);

  if(!isNaN(p1Str) && !isNaN(p2Str)){
    let total = (p1Int * p2Int);
    let tbody = document.getElementById('tbody');
  let tr = document.createElement('tr');
  tr.innerHTML = `
  <th scope="row">${count}</th>
  <th>Parallelogram</th>
  <td>${total}</td>
  <td><button class='btn btn-success btn-sm'>click</button></td>
  `;
  tbody.appendChild(tr);
  }
});

//Rhombus
document.getElementById('rhBtn').addEventListener('click', function() {
  count += 1;
  let r1 = document.getElementById('r1');
  let r1Str = r1.value;
  let r1Int = parseInt(r1Str);

  let r2 = document.getElementById('r2');
  let r2Str = r2.value;
  let r2Int = parseInt(r2Str);

  if(!isNaN(r1Str) && !isNaN(r2Str)){
    let total = 0.5 * (r1Int * r2Int);
    let tbody = document.getElementById('tbody');
  let tr = document.createElement('tr');
  tr.innerHTML = `
  <th scope="row">${count}</th>
  <th>Rhombus</th>
  <td>${total}</td>
  <td><button class='btn btn-success btn-sm'>click</button></td>
  `;
  tbody.appendChild(tr);
  }
});

//Pentagon
document.getElementById('peBtn').addEventListener('click', function () {
  count += 1;
  let pe1 = document.getElementById('pe1');
  let pe1Str = pe1.value;
  let pe1Int = parseInt(pe1Str);

  let pe2 = document.getElementById('pe2');
  let pe2Str = pe2.value;
  let pe2Int = parseInt(pe2Str);

  if(!isNaN(pe1Str) && !isNaN(pe2Str)){
    let total = 0.5 * (pe1Int * pe2Int);
    let tbody = document.getElementById('tbody');
  let tr = document.createElement('tr');
  tr.innerHTML = `
  <th scope="row">${count}</th>
  <th>Pentagon</th>
  <td>${total}</td>
  <td><button class='btn btn-success btn-sm'>click</button></td>
  `;
  tbody.appendChild(tr);
  }
});

//Ellipse
document.getElementById('eBtn').addEventListener('click', function () {
  count += 1;
  let e1 = document.getElementById('e1');
  let e1Str = e1.value;
  let e1Int = parseInt(e1Str);

  let e2 = document.getElementById('e2');
  let e2Str = e2.value;
  let e2Int = parseInt(e2Str);

  if(!isNaN(e1Str) && !isNaN(e2Str)){
    let total = (3.1416 * (e1Int * e2Int)).toFixed(2);
    let tbody = document.getElementById('tbody');
  let tr = document.createElement('tr');
  tr.innerHTML = `
  <th scope="row">${count}</th>
  <th>Ellipse</th>
  <td>${total}</td>
  <td><button class='btn btn-success btn-sm'>click</button></td>
  `;
  tbody.appendChild(tr);
  }
});