 window.auroreSlider = function( selector ) {
 		var elements = Array.from(document.querySelectorAll(selector));
		elements.forEach(function(slider,sliderNumber) {
	        		var slidesOriginalAmount = slider.children.length, 
					originalSlides = slider.innerHTML, 
					containerWidth = slider.offsetWidth, 
					offset,
					sb='',
					ch = Array.from(slider.children).reduce(
								function(total, elem)
								{ 
									return elem.offsetHeight > total ? elem.offsetHeight : total; 
								},0) + 5,
					currentIndex = 1;

					slider.classList.add('aurore-slider');
					Array.from(slider.children ).forEach(function(slide,sln){
						slide.classList.add('aurore-slide');
					});
						

					slider.style.width =  containerWidth+'px';
					slider.style.height =  ch+'px'; 
						

					slider.innerHTML =  '<div class="inwrap"><div class="pseudolayer"></div></div>';
					
					for (var i = 0; i < 101; i++) {
						sb+=originalSlides;
					}

					slider
						.querySelector('.pseudolayer')
						.innerHTML=sb;

					Array.from(slider.querySelector('.pseudolayer').querySelectorAll('.aurore-slide')).forEach(function(slide,sln){
						
					slide.style.width =  containerWidth+'px';
					slide.style.height =  ch+'px'; 
					});

					slider.querySelector('.inwrap').style.width = containerWidth+'px';
					slider.querySelector('.inwrap').style.height = ch+'px'; 

					offset = slidesOriginalAmount * 50 * (0 - containerWidth);

					slider.querySelector('.pseudolayer').style.left = offset+'px' ;
					slider.querySelector('.pseudolayer').style.height = ch+'px';
					 
					slider.innerHTML = `<svg class="prev"
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   viewBox="0 -256 1792 1792"
   id="svg3013"
   version="1.1"
   inkscape:version="0.48.3.1 r9886"
   width="100%"
   height="100%"
   sodipodi:docname="chevron_left_font_awesome.svg">
  <metadata
     id="metadata3023">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <defs
     id="defs3021" />
  <sodipodi:namedview
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1"
     objecttolerance="10"
     gridtolerance="10"
     guidetolerance="10"
     inkscape:pageopacity="0"
     inkscape:pageshadow="2"
     inkscape:window-width="640"
     inkscape:window-height="480"
     id="namedview3019"
     showgrid="false"
     inkscape:zoom="0.13169643"
     inkscape:cx="896"
     inkscape:cy="896"
     inkscape:window-x="0"
     inkscape:window-y="25"
     inkscape:window-maximized="0"
     inkscape:current-layer="svg3013" />
  <g
     transform="matrix(1,0,0,-1,387.25424,1338.5763)"
     id="g3015">
    <path
       d="M 742,-37 90,614 Q 53,651 53,704.5 53,758 90,795 l 652,651 q 37,37 90.5,37 53.5,0 90.5,-37 l 75,-75 q 37,-37 37,-90.5 0,-53.5 -37,-90.5 L 512,704 998,219 q 37,-38 37,-91 0,-53 -37,-90 L 923,-37 Q 886,-74 832.5,-74 779,-74 742,-37 z"
       id="path3017"
       inkscape:connector-curvature="0"
       style="fill:currentColor" />
  </g>
</svg>
						<span><span class="curr">1</span>
						/`+slidesOriginalAmount+`</span>
						<svg class="next"
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   viewBox="0 -256 1792 1792"
   id="svg3025"
   version="1.1"
   inkscape:version="0.48.3.1 r9886"
   width="100%"
   height="100%"
   sodipodi:docname="chevron_right_font_awesome.svg">
  <metadata
     id="metadata3035">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <defs
     id="defs3033" />
  <sodipodi:namedview
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1"
     objecttolerance="10"
     gridtolerance="10"
     guidetolerance="10"
     inkscape:pageopacity="0"
     inkscape:pageshadow="2"
     inkscape:window-width="640"
     inkscape:window-height="480"
     id="namedview3031"
     showgrid="false"
     inkscape:zoom="0.13169643"
     inkscape:cx="896"
     inkscape:cy="896"
     inkscape:window-x="0"
     inkscape:window-y="25"
     inkscape:window-maximized="0"
     inkscape:current-layer="svg3025" />
  <g
     transform="matrix(1,0,0,-1,349.28814,1330.9831)"
     id="g3027">
    <path
       d="m 1099,704 q 0,-52 -37,-91 L 410,-38 q -37,-37 -90,-37 -53,0 -90,37 l -76,75 q -37,39 -37,91 0,53 37,90 l 486,486 -486,485 q -37,39 -37,91 0,53 37,90 l 76,75 q 36,38 90,38 54,0 90,-38 l 652,-651 q 37,-37 37,-90 z"
       id="path3029"
       inkscape:connector-curvature="0"
       style="fill:currentColor" />
  </g>
</svg>
<span>`+slidesOriginalAmount+` avis</span>` + slider.innerHTML;
					slider
						.querySelector('.prev')
						.onclick = function(e){ 
              event.preventDefault();
							go(-1); 
						};
					slider
						.querySelector('.next')
						.onclick = function(e){ 
              event.preventDefault();
							go(1); 
						};

					var currentMousePos = { x: -1, y: -1 },startx,endx,ev;
				    slider.onmousemove = function(event) {
				    	console.log('Moved');
				        currentMousePos.x = event.pageX;
				        currentMousePos.y = event.pageY;
				    };

					slider.onmousedown = function(e){
						startx = currentMousePos.x;
						console.log('before1',startx);
					};
					slider.ontouchstart = function(e){
						startx = e.touches[0].pageX;
						console.log('before2',startx);
					};
					slider.onmouseup = function(e){
						endx = currentMousePos.x;
						console.log('after',endx);
					};
					slider.ontouchmove = function(e){
						console.log('Chavez');
						ev = e;  
					};
					slider.ontouchend = function(e){
						if(ev==undefined  ) return;
						endx = ev.touches[0].pageX;
						console.log('after',endx);
						if(endx < startx)
							go(1);
						else
							go(-1);
					};

					function go(number){
						if(number > 0){ 
							offset -= containerWidth;
							currentIndex = currentIndex== slidesOriginalAmount ? 1 : currentIndex+1;
						}
						else{ 
							offset += containerWidth;
							currentIndex = currentIndex== 1 ? slidesOriginalAmount : currentIndex-1;
						} 
						slider
							.querySelector('.pseudolayer')
							.style.left=offset+'px';
						slider
							.querySelector('.curr')
							.innerHTML = currentIndex;
					}
	    });
};
