function calculateTriangleArea() {
  const baseInput = document.getElementById('triangle-base');
  const baseValueText = baseInput.value;
  const baseText = parseFloat(baseValueText);
  console.log(baseText);
  const heightInput = document.getElementById('triangle-height');
  const heightValueText = heightInput.value;
  const heightText = parseFloat(heightValueText);
  console.log(heightText);

  const area = 0.5 * baseText * heightText;
  console.log(area);
  
  const areaSpan = document.getElementById('triangle-area');
  areaSpan.innerText = area;
}

function calculateRectangleArea(){
  const widthInput = document.getElementById('rectangle-width');
  const widthValue = widthInput.value;
  const width = parseFloat(widthValue);
  console.log(width);

  const lenghtInput = document.getElementById('rectangle-lenght');
  lenghtValue = lenghtInput.value;
  const lenght = parseFloat(lenghtValue);
  console.log(lenght); 

  const area = width * lenght;
  console.log(area);
  const areaSpan1 = document.getElementById('rectangle-area')
  areaSpan1.innerText = area;
   
}