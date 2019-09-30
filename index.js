
function klikket() {
 var x = document.getElementById("info");

 if (x.style.display == "block") {
   x.style.display = "none";
 } else {
   x.style.display = "block";
 }
}


 $(document).ready(function(){
   $("#stjerne").click(function(){
    $("#stjerne").hide();
   });


   $("#trekant").mouseenter(function(){
    $("#trekant").css("fill-opacity", "0.9");
    $("#trekant").css("stroke", "black");
  });

   $("rect").click(function(){
    $("#rect1").animate({
      opacity: '0.5',
      height: '40px',
      width: '40px'});
});

  $("circle").click(function(){
    $("#s1").fadeOut(2000);
    $("#s2").fadeOut("slow");
    $("#s3").fadeOut(4000);
    $("#s4").fadeOut(6000);
    $("#s5").fadeOut(8000);

  });

  function drawSquare() {
         const canvas = document.getElementById('myCanvas');

         const ctx = canvas.getContext('2d');


         ctx.fillStyle = "rgba(255,105,180, 0.3)";
         ctx.fillRect(50, 250, 160, 160);
         ctx.strokeStyle = "blue";
         ctx.strokeRect(50, 250, 160, 160);

     }
     drawSquare();

     function drawTriangle() {
            const canvas = document.getElementById('myCanvas');

            const ctx = canvas.getContext('2d');
            ctx.fillStyle = "rgba(0,0,0, 0.1)";
            ctx.beginPath();
            ctx.moveTo(420, 250);
            ctx.lineTo(350, 410);
            ctx.lineTo(480, 410);
            ctx.lineTo(420, 250);
            ctx.fill();

            ctx.strokeStyle = "#8a2be2";
            ctx.lineWidth=2;
            ctx.stroke();
            ctx.closePath();


        }
        drawTriangle();

        function drawStar() {
              const canvas = document.getElementById('myCanvas');
                  const ctx = canvas.getContext('2d');
                  ctx.fillStyle = "rgba(0,0,255, 0.2)";
                  ctx.beginPath();
                  ctx.moveTo(400, 5);
                  ctx.lineTo(350, 160);
                  ctx.lineTo(480, 60);
                  ctx.lineTo(320, 60);
                  ctx.lineTo(460, 160);
                  ctx.closePath();
                  ctx.fill();

                  ctx.strokeStyle = "#8a2be2";
                  ctx.lineWidth=2;
                  ctx.stroke();



          }
          drawStar();

          function drawEllipse() {
                const canvas = document.getElementById('myCanvas');
                    const ctx = canvas.getContext('2d');
                    ctx.beginPath();
                    ctx.ellipse(280, 500, 260, 40, Math.PI , 0, 2 * Math.PI);
                    ctx.stroke();
                    ctx.fillStyle = "rgba(138, 43, 226,0.4)";
                    ctx.fill();
            }
            drawEllipse();


            function drawCircle1() {
                 const canvas = document.getElementById('myCanvas');
                     const ctx = canvas.getContext('2d');
                          ctx.beginPath();
                          ctx.arc(200, 130, 60, 0, 2 * Math.PI);
                          ctx.stroke();
                          ctx.fillStyle = "rgba(138, 43, 226,0.4)";
                          ctx.fill();
             }
             drawCircle1();

             function drawCircle2() {
                 const canvas = document.getElementById('myCanvas');
                     const ctx = canvas.getContext('2d');
                          ctx.beginPath();
                          ctx.arc(200, 70, 40, 0, 2 * Math.PI);
                          ctx.stroke();
                          ctx.fillStyle = "rgba(138, 43, 226,0.4)";
                          ctx.fill();
             }
             drawCircle2();

             function drawCircle3() {
                 const canvas = document.getElementById('myCanvas');
                     const ctx = canvas.getContext('2d');
                          ctx.beginPath();
                          ctx.arc(80, 80, 50, 0, 2 * Math.PI);
                          ctx.stroke();
                          ctx.fillStyle = "rgba(138, 43, 226,0.4)";
                          ctx.fill();
             }
             drawCircle3();

             function drawCircle4() {
                 const canvas = document.getElementById('myCanvas');
                     const ctx = canvas.getContext('2d');
                          ctx.beginPath();
                          ctx.arc(130, 80, 60, 0, 2 * Math.PI);
                          ctx.stroke();
                          ctx.fillStyle = "rgba(138, 43, 226,0.4)";
                          ctx.fill();
             }
             drawCircle4();

             function drawCircle5() {
                 const canvas = document.getElementById('myCanvas');
                     const ctx = canvas.getContext('2d');
                          ctx.beginPath();
                          ctx.arc(80, 130, 50, 0, 2 * Math.PI);
                          ctx.stroke();
                          ctx.fillStyle = "rgba(138, 43, 226,0.4)";
                          ctx.fill();
             }
             drawCircle5();

             function drawCircle6() {
                 const canvas = document.getElementById('myCanvas');
                     const ctx = canvas.getContext('2d');
                          ctx.beginPath();
                          ctx.arc(130, 130, 50, 0, 2 * Math.PI);
                          ctx.stroke();
                          ctx.fillStyle = "rgba(138, 43, 226,0.4)";
                          ctx.fill();
             }
             drawCircle6();




             function drawTriangleBlack() {
                    const canvas = document.getElementById('myCanvas');

                    const ctx = canvas.getContext('2d');
                    ctx.fillStyle = "rgba(0,0,0)";
                    ctx.beginPath();
                    ctx.moveTo(420, 250);
                    ctx.lineTo(350, 410);
                    ctx.lineTo(480, 410);
                    ctx.lineTo(420, 250);
                    ctx.fill();

                    ctx.strokeStyle = "#000000";
                    ctx.lineWidth=2;
                    ctx.stroke();
                    ctx.closePath();


                }

    function coverStarWithSquare() {
           const canvas = document.getElementById('myCanvas');
           const ctx = canvas.getContext('2d');

           ctx.fillStyle = "rgb(211,211,211)";
           ctx.fillRect(305, 0, 200, 200);


       }





$(myCanvas).hover(function(){
            drawTriangleBlack();
})
$(myCanvas).click(function(){
            coverStarWithSquare();
})







 });
