var name = [];
var views = [];
var subs = [];
var comments = [];
var vids = [];
var notFound = [];
var channelNotFound = 0;

function getPowerOfTwo(value, pow) {
	var pow = pow || 1;
	while(pow<value) {
		pow *= 2;
	}
	return pow;
}

function measureText(ctx, textToMeasure) {
	return ctx.measureText(textToMeasure).width;
}

function createMultilineText(ctx, textToWrite, maxWidth, text) {
	textToWrite = textToWrite.replace("\n"," ");
	var currentText = textToWrite;
	var futureText;
	var subWidth = 0;
	var maxLineWidth = 0;
	
	var wordArray = textToWrite.split(" ");
	var wordsInCurrent, wordArrayLength;
	wordsInCurrent = wordArrayLength = wordArray.length;
	
	while (measureText(ctx, currentText) > maxWidth && wordsInCurrent > 1) {
		wordsInCurrent--;
		var linebreak = false;
		
		currentText = futureText = "";
		for(var i = 0; i < wordArrayLength; i++) {
			if (i < wordsInCurrent) {
				currentText += wordArray[i];
				if (i+1 < wordsInCurrent) { currentText += " "; }
			}
			else {
				futureText += wordArray[i];
				if( i+1 < wordArrayLength) { futureText += " "; }
			}
		}
	}
	text.push(currentText);
	maxLineWidth = measureText(ctx, currentText);
	
	if(futureText) {
		subWidth = createMultilineText(ctx, futureText, maxWidth, text);
		if (subWidth > maxLineWidth) { 
			maxLineWidth = subWidth;
		}
	}
	
	return maxLineWidth;
}

function drawText(data, num) {
	var canvasX, canvasY;
	var textX, textY;

	var text = [];
	var textToWrite = data;
	console.log(data);

	var maxWidth = 256;
	
	var squareTexture = 1;
	
	var textHeight = 50;	// Font size
	var textAlignment = "center";
	var textColor = "#333";
	var fontFamily = "Arial";
	
	var bgColor = "#FFF";	// Change background color here
	
	var canvas = document.getElementById('textureCanvas' + num);
	var ctx = canvas.getContext('2d');
	
	ctx.font = textHeight+"px "+fontFamily;
	if (maxWidth && measureText(ctx, textToWrite) > maxWidth ) {
		maxWidth = createMultilineText(ctx, textToWrite, maxWidth, text);
		canvasX = getPowerOfTwo(maxWidth);
	} else {
		text.push(textToWrite);
		canvasX = getPowerOfTwo(ctx.measureText(textToWrite).width);
	}
	canvasY = getPowerOfTwo(textHeight*(text.length+1)); 
	if(squareTexture) {
		(canvasX > canvasY) ? canvasY = canvasX : canvasX = canvasY;
	}

	// console.log("Calculated Width: " + canvasX);
	// console.log("Calculated Height: " + canvasY);

	canvas.width = canvasX;
	canvas.height = canvasY;
	
	// Center Text Alignment
	textX = canvasX/2;
	textY = canvasY/2;
	
	ctx.fillStyle = bgColor;
	ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	
	ctx.fillStyle = textColor;
	ctx.textAlign = textAlignment;
	
	ctx.textBaseline = 'middle'; // top, middle, bottom
	ctx.font = textHeight+"px "+fontFamily;
	
	var offset = (canvasY - textHeight*(text.length+1)) * 0.5;
	
	for(var i = 0; i < text.length; i++) {
		if(text.length > 1) {
			textY = (i+1)*textHeight + offset;
		}
		ctx.fillText(text[i], textX,  textY);
	}
}

drawText(name, 0);
drawText(subs, 1);
drawText(views, 2);
drawText(comments, 3);
drawText(vids, 4);
drawText(name, 5);