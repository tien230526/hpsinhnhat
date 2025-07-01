<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="images/gift.png" type="image/x-icon">
  <link rel="stylesheet" href="css/style.css">
  <title>FLOWERS</title>
</head>

<body class="not-loaded">
  <!-- Background -->
  <div class="night"></div>

  <!-- Canvas cho hiệu ứng -->
  <canvas id="pinkboard"></canvas>

  <!-- Flower -->
  <div class="flowers">
    <div class="flower flower--1">
      <div class="flower__leafs flower__leafs--1">
        <div class="flower__leaf flower__leaf--1"></div>
        <div class="flower__leaf flower__leaf--2"></div>
        <div class="flower__leaf flower__leaf--3"></div>
        <div class="flower__leaf flower__leaf--4"></div>
        <div class="flower__white-circle"></div>
        <div class="flower__light flower__light--1"></div>
        <div class="flower__light flower__light--2"></div>
        <div class="flower__light flower__light--3"></div>
        <div class="flower__light flower__light--4"></div>
        <div class="flower__light flower__light--5"></div>
        <div class="flower__light flower__light--6"></div>
        <div class="flower__light flower__light--7"></div>
        <div class="flower__light flower__light--8"></div>
      </div>
      <div class="flower__line">
        <div class="flower__line__leaf flower__line__leaf--1"></div>
        <div class="flower__line__leaf flower__line__leaf--2"></div>
        <div class="flower__line__leaf flower__line__leaf--3"></div>
        <div class="flower__line__leaf flower__line__leaf--4"></div>
        <div class="flower__line__leaf flower__line__leaf--5"></div>
        <div class="flower__line__leaf flower__line__leaf--6"></div>
      </div>
    </div>

    <div class="flower flower--2">
      <div class="flower__leafs flower__leafs--2">
        <div class="flower__leaf flower__leaf--1"></div>
        <div class="flower__leaf flower__leaf--2"></div>
        <div class="flower__leaf flower__leaf--3"></div>
        <div class="flower__leaf flower__leaf--4"></div>
        <div class="flower__white-circle"></div>
        <div class="flower__light flower__light--1"></div>
        <div class="flower__light flower__light--2"></div>
        <div class="flower__light flower__light--3"></div>
        <div class="flower__light flower__light--4"></div>
        <div class="flower__light flower__light--5"></div>
        <div class="flower__light flower__light--6"></div>
        <div class="flower__light flower__light--7"></div>
        <div class="flower__light flower__light--8"></div>
      </div>
      <div class="flower__line">
        <div class="flower__line__leaf flower__line__leaf--1"></div>
        <div class="flower__line__leaf flower__line__leaf--2"></div>
        <div class="flower__line__leaf flower__line__leaf--3"></div>
        <div class="flower__line__leaf flower__line__leaf--4"></div>
      </div>
    </div>

    <div class="flower flower--3">
      <div class="flower__leafs flower__leafs--3">
        <div class="flower__leaf flower__leaf--1"></div>
        <div class="flower__leaf flower__leaf--2"></div>
        <div class="flower__leaf flower__leaf--3"></div>
        <div class="flower__leaf flower__leaf--4"></div>
        <div class="flower__white-circle"></div>
        <div class="flower__light flower__light--1"></div>
        <div class="flower__light flower__light--2"></div>
        <div class="flower__light flower__light--3"></div>
        <div class="flower__light flower__light--4"></div>
        <div class="flower__light flower__light--5"></div>
        <div class="flower__light flower__light--6"></div>
        <div class="flower__light flower__light--7"></div>
        <div class="flower__light flower__light--8"></div>
      </div>
      <div class="flower__line">
        <div class="flower__line__leaf flower__line__leaf--1"></div>
        <div class="flower__line__leaf flower__line__leaf--2"></div>
        <div class="flower__line__leaf flower__line__leaf--3"></div>
        <div class="flower__line__leaf flower__line__leaf--4"></div>
      </div>
    </div>

    <div class="grow-ans" style="--d:1.2s">
      <div class="flower__g-long">
        <div class="flower__g-long__top"></div>
        <div class="flower__g-long__bottom"></div>
      </div>
    </div>

    <div class="growing-grass">
      <div class="flower__grass flower__grass--1">
        <div class="flower__grass--top"></div>
        <div class="flower__grass--bottom"></div>
        <div class="flower__grass__leaf flower__grass__leaf--1"></div>
        <div class="flower__grass__leaf flower__grass__leaf--2"></div>
        <div class="flower__grass__leaf flower__grass__leaf--3"></div>
        <div class="flower__grass__leaf flower__grass__leaf--4"></div>
        <div class="flower__grass__leaf flower__grass__leaf--5"></div>
        <div class="flower__grass__leaf flower__grass__leaf--6"></div>
        <div class="flower__grass__leaf flower__grass__leaf--7"></div>
        <div class="flower__grass__leaf flower__grass__leaf--8"></div>
        <div class="flower__grass__overlay"></div>
      </div>
    </div>

    <div class="growing-grass">
      <div class="flower__grass flower__grass--2">
        <div class="flower__grass--top"></div>
        <div class="flower__grass--bottom"></div>
        <div class="flower__grass__leaf flower__grass__leaf--1"></div>
        <div class="flower__grass__leaf flower__grass__leaf--2"></div>
        <div class="flower__grass__leaf flower__grass__leaf--3"></div>
        <div class="flower__grass__leaf flower__grass__leaf--4"></div>
        <div class="flower__grass__leaf flower__grass__leaf--5"></div>
        <div class="flower__grass__leaf flower__grass__leaf--6"></div>
        <div class="flower__grass__leaf flower__grass__leaf--7"></div>
        <div class="flower__grass__leaf flower__grass__leaf--8"></div>
        <div class="flower__grass__overlay"></div>
      </div>
    </div>

    <div class="grow-ans" style="--d:2.4s">
      <div class="flower__g-right flower__g-right--1">
        <div class="leaf"></div>
      </div>
    </div>

    <div class="grow-ans" style="--d:2.8s">
      <div class="flower__g-right flower__g-right--2">
        <div class="leaf"></div>
      </div>
    </div>

    <div class="grow-ans" style="--d:2.8s">
      <div class="flower__g-front">
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--1">
          <div class="flower__g-front__leaf"></div>
        </div>
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--2">
          <div class="flower__g-front__leaf"></div>
        </div>
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--3">
          <div class="flower__g-front__leaf"></div>
        </div>
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--4">
          <div class="flower__g-front__leaf"></div>
        </div>
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--5">
          <div class="flower__g-front__leaf"></div>
        </div>
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--6">
          <div class="flower__g-front__leaf"></div>
        </div>
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--7">
          <div class="flower__g-front__leaf"></div>
        </div>
        <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--8">
          <div class="flower__g-front__leaf"></div>
        </div>
        <div class="flower__g-front__line"></div>
      </div>
    </div>

    <div class="grow-ans" style="--d:3.2s">
      <div class="flower__g-fr">
        <div class="leaf"></div>
        <div class="flower__g-fr__leaf flower__g-fr__leaf--1"></div>
        <div class="flower__g-fr__leaf flower__g-fr__leaf--2"></div>
        <div class="flower__g-fr__leaf flower__g-fr__leaf--3"></div>
        <div class="flower__g-fr__leaf flower__g-fr__leaf--4"></div>
        <div class="flower__g-fr__leaf flower__g-fr__leaf--5"></div>
        <div class="flower__g-fr__leaf flower__g-fr__leaf--6"></div>
        <div class="flower__g-fr__leaf flower__g-fr__leaf--7"></div>
        <div class="flower__g-fr__leaf flower__g-fr__leaf--8"></div>
      </div>
    </div>

    <div class="long-g long-g--0">
      <div class="grow-ans" style="--d:3s">
        <div class="leaf leaf--0"></div>
      </div>
      <div class="grow-ans" style="--d:2.2s">
        <div class="leaf leaf--1"></div>
      </div>
      <div class="grow-ans" style="--d:3.4s">
        <div class="leaf leaf--2"></div>
      </div>
      <div class="grow-ans" style="--d:3.6s">
        <div class="leaf leaf--3"></div>
      </div>
    </div>

    <div class="long-g long-g--1">
      <div class="grow-ans" style="--d:3.6s">
        <div class="leaf leaf--0"></div>
      </div>
      <div class="grow-ans" style="--d:3.8s">
        <div class="leaf leaf--1"></div>
      </div>
      <div class="grow-ans" style="--d:4s">
        <div class="leaf leaf--2"></div>
      </div>
      <div class="grow-ans" style="--d:4.2s">
        <div class="leaf leaf--3"></div>
      </div>
    </div>

    <div class="long-g long-g--2">
      <div class="grow-ans" style="--d:4s">
        <div class="leaf leaf--0"></div>
      </div>
      <div class="grow-ans" style="--d:4.2s">
        <div class="leaf leaf--1"></div>
      </div>
      <div class="grow-ans" style="--d:4.4s">
        <div class="leaf leaf--2"></div>
      </div>
      <div class="grow-ans" style="--d:4.6s">
        <div class="leaf leaf--3"></div>
      </div>
    </div>

    <div class="long-g long-g--3">
      <div class="grow-ans" style="--d:4s">
        <div class="leaf leaf--0"></div>
      </div>
      <div class="grow-ans" style="--d:4.2s">
        <div class="leaf leaf--1"></div>
      </div>
      <div class="grow-ans" style="--d:3s">
        <div class="leaf leaf--2"></div>
      </div>
      <div class="grow-ans" style="--d:3.6s">
        <div class="leaf leaf--3"></div>
      </div>
    </div>

    <div class="long-g long-g--4">
      <div class="grow-ans" style="--d:4s">
        <div class="leaf leaf--0"></div>
      </div>
      <div class="grow-ans" style="--d:4.2s">
        <div class="leaf leaf--1"></div>
      </div>
      <div class="grow-ans" style="--d:3s">
        <div class="leaf leaf--2"></div>
      </div>
      <div class="grow-ans" style="--d:3.6s">
        <div class="leaf leaf--3"></div>
      </div>
    </div>

    <div class="long-g long-g--5">
      <div class="grow-ans" style="--d:4s">
        <div class="leaf leaf--0"></div>
      </div>
      <div class="grow-ans" style="--d:4.2s">
        <div class="leaf leaf--1"></div>
      </div>
      <div class="grow-ans" style="--d:3s">
        <div class="leaf leaf--2"></div>
      </div>
      <div class="grow-ans" style="--d:3.6s">
        <div class="leaf leaf--3"></div>
      </div>
    </div>

    <div class="long-g long-g--6">
      <div class="grow-ans" style="--d:4.2s">
        <div class="leaf leaf--0"></div>
      </div>
      <div class="grow-ans" style="--d:4.4s">
        <div class="leaf leaf--1"></div>
      </div>
      <div class="grow-ans" style="--d:4.6s">
        <div class="leaf leaf--2"></div>
      </div>
      <div class="grow-ans" style="--d:4.8s">
        <div class="leaf leaf--3"></div>
      </div>
    </div>

    <div class="long-g long-g--7">
      <div class="grow-ans" style="--d:3s">
        <div class="leaf leaf--0"></div>
      </div>
      <div class="grow-ans" style="--d:3.2s">
        <div class="leaf leaf--1"></div>
      </div>
      <div class="grow-ans" style="--d:3.5s">
        <div class="leaf leaf--2"></div>
      </div>
      <div class="grow-ans" style="--d:3.6s">
        <div class="leaf leaf--3"></div>
      </div>
    </div>
  </div>

  <!-- Nút bấm -->
  <div class="btn-container">
    <a href="hpbd.html" class="btn" onclick="window.location.href='hpbd.html'">
      <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" class="sparkle">
        <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
      </svg>
      <span class="text">Bấm vào đây nè!!!</span>
    </a>
  </div>

  <!-- Hiệu ứng tim -->
  <div class="bubbles">
    <div class="bubble"><svg class="heart" viewBox="0 0 32 32">
        <title>heart22</title>
        <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
      </svg>
    </div>
    <div class="bubble"><svg class="heart" viewBox="0 0 32 32">
        <title>heart22</title>
        <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
      </svg>
    </div>
    <div class="bubble"><svg class="heart" viewBox="0 0 32 32">
        <title>heart22</title>
        <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
      </svg>
    </div>
    <div class="bubble"><svg class="heart" viewBox="0 0 32 32">
        <title>heart22</title>
        <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
      </svg>
    </div>
    <div class="bubble"><svg class="heart" viewBox="0 0 32 32">
        <title>heart22</title>
        <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
      </svg>
    </div>
    <div class="bubble"><svg class="heart" viewBox="0 0 32 32">
        <title>heart22</title>
        <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
      </svg>
    </div>
    <div class="bubble"><svg class="heart" viewBox="0 0 32 32">
        <title>heart22</title>
        <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
      </svg>
    </div>
    <div class="bubble"><svg class="heart" viewBox="0 0 32 32">
        <title>heart22</title>
        <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
      </svg>
    </div>
    <div class="bubble"><svg class="heart" viewBox="0 0 32 32">
        <title>heart22</title>
        <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
      </svg>
    </div>
    <div class="bubble"><svg class="heart" viewBox="0 0 32 32">
        <title>heart22</title>
        <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
      </svg>
    </div>
    <div class="bubble"><svg class="heart" viewBox="0 0 32 32">
        <title>heart22</title>
        <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
      </svg>
    </div>
    <div class="bubble"><svg class="heart" viewBox="0 0 32 32">
        <title>heart22</title>
        <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
      </svg>
    </div>
    <div class="bubble"><svg class="heart" viewBox="0 0 32 32">
        <title>heart22</title>
        <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
      </svg>
    </div>
    <div class="bubble"><svg class="heart" viewBox="0 0 32 32">
        <title>heart22</title>
        <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
      </svg>
    </div>
    <div class="bubble"><svg class="heart" viewBox="0 0 32 32">
        <title>heart22</title>
        <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
      </svg>
    </div>
  </div>

  <!-- Title -->
  <h1 class="title"><span id="title"></span></h1>

  <script src="js/main.js"></script>
</body>

</html>
