

function calculateTriangleArea(){
  const baseText = getInputValue('triangle-base');
  const heightText = getInputValue('triangle-height');
  const area = 0.5 * baseText * heightText;
  setElementInnerText('triangle-area', area);
}
 
function calculateRectangleArea(){
  const rectanglerWitdh = getInputValue('rectangle-witdh');
  const rectangleHeight = getInputValue('rectangle-height')
  const area = rectanglerWitdh * rectangleHeight;
  setElementInnerText('rectangle-area', area);
}

function calculateParallelogramArea(){
   const base = getInputValue('parallelogram-width');
  const lenght = getInputValue('parallelogram-lenght');
  const area = base * lenght ;
  setElementInnerText('parallelogram-area', area);
}

function calculateEllipseArea(){
  const majorRadius = getInputValue('ellipse-major-redius');
  const minorRadius = getInputValue('ellipse-minor-redius');
  const area = 3.14 * majorRadius * minorRadius ;
  setElementInnerText('ellipse-area', area);
}

function getInputValue(id){``
  const inputField = document.getElementById(id);
  const inputVAlueText = inputField.value;
  const value = parseFloat(inputVAlueText);
  return value;
}
function setElementInnerText(elementId, area){
  const element = document.getElementById(elementId);
  element.innerText = area;
}