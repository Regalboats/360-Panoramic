var APP_DATA = {
  "scenes": [
    {
      "id": "0-fhd",
      "name": "FHD",
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
        "yaw": 2.3611880010045434,
        "pitch": 0.44158724493550316,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 2.1411660273843784,
          "pitch": 0.46578592145219844,
          "rotation": 3.141592653589793,
          "target": "1-cockpit"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cockpit",
      "name": "Cockpit",
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
        "yaw": 2.100307373065613,
        "pitch": 0.5706148161592814,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -2.228750634230103,
          "pitch": 0.4646807240421733,
          "rotation": 3.141592653589793,
          "target": "0-fhd"
        },
        {
          "yaw": 2.404290932242386,
          "pitch": 0.19726003181285634,
          "rotation": 3.141592653589793,
          "target": "2-helm"
        },
        {
          "yaw": 1.4669999755763747,
          "pitch": 0.17046486579107345,
          "rotation": 3.141592653589793,
          "target": "3-walkthrough"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-helm",
      "name": "Helm",
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
        "yaw": 1.1177965820738613,
        "pitch": 0.4262937192852352,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 1.0346765157438114,
          "pitch": 0.2969190958818082,
          "rotation": 3.141592653589793,
          "target": "1-cockpit"
        },
        {
          "yaw": 0.37460968033018105,
          "pitch": 0.3097094171313781,
          "rotation": 3.141592653589793,
          "target": "0-fhd"
        },
        {
          "yaw": 2.2742756259958323,
          "pitch": 0.39273182801726847,
          "rotation": 3.141592653589793,
          "target": "3-walkthrough"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-walkthrough",
      "name": "Walkthrough",
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
        "yaw": 1.5963495444915257,
        "pitch": 0.4208383786606795,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 0.984194325022365,
          "pitch": 0.25261917607013373,
          "rotation": 3.141592653589793,
          "target": "2-helm"
        },
        {
          "yaw": 1.7954896685145956,
          "pitch": 0.1551404479647811,
          "rotation": 3.141592653589793,
          "target": "1-cockpit"
        },
        {
          "yaw": 1.559180549834963,
          "pitch": 0.1850998387137892,
          "rotation": 9.42477796076938,
          "target": "0-fhd"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "20240308 FireFly GA_Original",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
