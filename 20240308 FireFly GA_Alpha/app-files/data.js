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
        "yaw": 1.6865006716124338,
        "pitch": 0.21959464019897723,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 1.0140964419203158,
          "pitch": 0.4067201863290144,
          "rotation": 3.141592653589793,
          "target": "1-wetbar"
        },
        {
          "yaw": 1.7753283193963796,
          "pitch": 0.34859621477019687,
          "rotation": 3.141592653589793,
          "target": "2--cockpit"
        },
        {
          "yaw": 2.235721895121639,
          "pitch": 0.01905635247118198,
          "rotation": 3.141592653589793,
          "target": "3--helm"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-wetbar",
      "name": "Wetbar",
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
        "yaw": 0.5732735312319939,
        "pitch": 0.3209612383851095,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.6694348595757269,
          "pitch": 0.3550497041100016,
          "rotation": 3.141592653589793,
          "target": "2--cockpit"
        },
        {
          "yaw": 1.8627294993118921,
          "pitch": 0.3789634683323335,
          "rotation": 3.141592653589793,
          "target": "0-fhd"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2--cockpit",
      "name": " Cockpit",
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
        "yaw": 1.6054650938331134,
        "pitch": 0.24020254528579876,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -2.405007869366841,
          "pitch": 0.47971049143825084,
          "rotation": 3.141592653589793,
          "target": "0-fhd"
        },
        {
          "yaw": 1.9154624092050865,
          "pitch": 0.09495197857895832,
          "rotation": 3.141592653589793,
          "target": "3--helm"
        },
        {
          "yaw": -0.7639332902933624,
          "pitch": 0.5893739657247536,
          "rotation": 3.141592653589793,
          "target": "1-wetbar"
        },
        {
          "yaw": 1.1659583829437494,
          "pitch": 0.1393714241620252,
          "rotation": 3.141592653589793,
          "target": "4-walktrough"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3--helm",
      "name": " Helm",
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
        "yaw": -0.6699422923930722,
        "pitch": 0.49721162940584307,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.14147480957154102,
          "pitch": 0.24350593453438485,
          "rotation": 3.141592653589793,
          "target": "4-walktrough"
        },
        {
          "yaw": -1.0472053904307934,
          "pitch": 0.3295254840100199,
          "rotation": 3.141592653589793,
          "target": "2--cockpit"
        },
        {
          "yaw": -1.8189545704874064,
          "pitch": 0.210177429666901,
          "rotation": 3.141592653589793,
          "target": "0-fhd"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-walktrough",
      "name": "Walktrough",
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
        "yaw": 1.27799598584844,
        "pitch": 0.34170649972054434,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 1.4818060653890122,
          "pitch": 0.1653762414849247,
          "rotation": 3.141592653589793,
          "target": "2--cockpit"
        },
        {
          "yaw": 0.6264506441341133,
          "pitch": 0.1114887441979775,
          "rotation": 9.42477796076938,
          "target": "3--helm"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "20240308 Firefly GA Alpha",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
