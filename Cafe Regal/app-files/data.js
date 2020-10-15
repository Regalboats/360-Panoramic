var APP_DATA = {
  "scenes": [
    {
      "id": "0-center",
      "name": "Center",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.5867256704576889,
        "pitch": 0.159004842493065,
        "fov": 1.3731268825307628
      },
      "linkHotspots": [
        {
          "yaw": 2.6109818042408808,
          "pitch": 0.13069114373648816,
          "rotation": 0,
          "target": "1-enterance-a"
        },
        {
          "yaw": -1.5829731530684779,
          "pitch": 0.274587315287647,
          "rotation": 0,
          "target": "3-cafeteria"
        },
        {
          "yaw": 0.4335063591925401,
          "pitch": 0.10290350493763789,
          "rotation": 0,
          "target": "2-enterance-b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-enterance-a",
      "name": "Enterance A",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.102423274273999,
        "pitch": 0.19055778776038146,
        "fov": 1.3731268825307628
      },
      "linkHotspots": [
        {
          "yaw": -1.8670457459914296,
          "pitch": 0.17481859525157972,
          "rotation": 0,
          "target": "0-center"
        },
        {
          "yaw": -1.3925928172406703,
          "pitch": 0.10831715410594178,
          "rotation": 0,
          "target": "2-enterance-b"
        },
        {
          "yaw": -2.3665627247622147,
          "pitch": 0.10244962857080964,
          "rotation": 0,
          "target": "3-cafeteria"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-enterance-b",
      "name": "Enterance B",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.7540141000767946,
        "pitch": 0.09694429486228984,
        "fov": 1.3731268825307628
      },
      "linkHotspots": [
        {
          "yaw": 2.2897416123035583,
          "pitch": 0.11649633573665241,
          "rotation": 0,
          "target": "0-center"
        },
        {
          "yaw": 1.8722810671710644,
          "pitch": 0.10529524523812839,
          "rotation": 0,
          "target": "1-enterance-a"
        },
        {
          "yaw": 2.659561475536411,
          "pitch": 0.08588481505836398,
          "rotation": 0,
          "target": "3-cafeteria"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-cafeteria",
      "name": "Cafeteria",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.1247085875686764,
        "pitch": 0.05848531613614405,
        "fov": 1.3731268825307628
      },
      "linkHotspots": [
        {
          "yaw": -2.8979429966509844,
          "pitch": 0.07774480901282566,
          "rotation": 0,
          "target": "2-enterance-b"
        },
        {
          "yaw": -2.072701714503962,
          "pitch": 0.3091602677077656,
          "rotation": 0,
          "target": "0-center"
        },
        {
          "yaw": -1.3032363580037511,
          "pitch": 0.10663719410551487,
          "rotation": 0,
          "target": "1-enterance-a"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Cafe REGAL",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
