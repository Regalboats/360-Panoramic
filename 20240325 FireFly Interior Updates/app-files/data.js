var APP_DATA = {
  "scenes": [
    {
      "id": "0-cabin",
      "name": "Cabin",
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
        "yaw": 0.8799921240138051,
        "pitch": 0.4622513209051533,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 1.5697078307950463,
          "pitch": 0.6261615309840209,
          "rotation": 3.141592653589793,
          "target": "1-seated-fwd"
        },
        {
          "yaw": -1.6593847570426803,
          "pitch": 0.7251869015066603,
          "rotation": 3.141592653589793,
          "target": "3-mid-berth"
        },
        {
          "yaw": -2.9503926110720773,
          "pitch": 0.2737599331318634,
          "rotation": 6.283185307179586,
          "target": "2-head"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-seated-fwd",
      "name": "Seated FWD",
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
        "yaw": 2.0402177351482766,
        "pitch": 0.14792036908812278,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 2.0638124186748428,
          "pitch": 0.3497710083948853,
          "rotation": 3.141592653589793,
          "target": "3-mid-berth"
        },
        {
          "yaw": 2.0853278582529624,
          "pitch": 0.6027324221130463,
          "rotation": 3.141592653589793,
          "target": "0-cabin"
        },
        {
          "yaw": 1.9693835247338463,
          "pitch": 0.04844372261912433,
          "rotation": 4.71238898038469,
          "target": "2-head"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-head",
      "name": "Head",
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
        "yaw": 1.5016423274663833,
        "pitch": 0.7712670284612422,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -1.002099267900899,
          "pitch": 0.6268349821847821,
          "rotation": 0,
          "target": "0-cabin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-mid-berth",
      "name": "Mid Berth",
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
        "yaw": 1.5364069368454203,
        "pitch": 0.07174302497348961,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 1.5716071270675007,
          "pitch": -0.01406849630895124,
          "rotation": 3.141592653589793,
          "target": "1-seated-fwd"
        },
        {
          "yaw": 1.56675356762001,
          "pitch": 0.27042233151815687,
          "rotation": 3.141592653589793,
          "target": "0-cabin"
        },
        {
          "yaw": 1.6612073761310455,
          "pitch": -0.2747290616574336,
          "rotation": 7.853981633974483,
          "target": "2-head"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "20240325 Firefly Interior",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
