var APP_DATA = {
  "scenes": [
    {
      "id": "0-helm",
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
        "yaw": 1.2259486444748493,
        "pitch": 0.6617199472045385,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.9062689694524977,
          "pitch": 0.0797336769426451,
          "rotation": 1.5707963267948966,
          "target": "1-bow"
        },
        {
          "yaw": 0.5831516976188169,
          "pitch": 0.37219992014414593,
          "rotation": 3.141592653589793,
          "target": "5-interior---hall"
        },
        {
          "yaw": -0.9151958130967266,
          "pitch": 0.2662508102708294,
          "rotation": 3.141592653589793,
          "target": "2-cockpit"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bow",
      "name": "Bow",
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
        "yaw": -1.5242494387943069,
        "pitch": 0.26091097176856337,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": -1.0803549351949329,
          "pitch": 0.13487547683077672,
          "rotation": 18.84955592153877,
          "target": "0-helm"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-cockpit",
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
        "yaw": -2.1404400349363115,
        "pitch": 0.3376382423829334,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 1.9993130174202571,
          "pitch": 0.13740639298544366,
          "rotation": 3.141592653589793,
          "target": "0-helm"
        },
        {
          "yaw": 1.3278491160040424,
          "pitch": 0.039215896038367504,
          "rotation": 0,
          "target": "1-bow"
        },
        {
          "yaw": -1.7709120924658137,
          "pitch": 0.38235323317743664,
          "rotation": 3.141592653589793,
          "target": "3-aft-deck"
        },
        {
          "yaw": -2.2982448826748243,
          "pitch": 0.2164402676697783,
          "rotation": 3.141592653589793,
          "target": "4-opening-hull-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-aft-deck",
      "name": "Aft Deck",
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
        "yaw": 1.5793694071806916,
        "pitch": 0.2283980363603071,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 1.198720895734148,
          "pitch": 0.34504028914931517,
          "rotation": 3.141592653589793,
          "target": "2-cockpit"
        },
        {
          "yaw": 1.8379110228193545,
          "pitch": 0.05944597192194223,
          "rotation": 9.42477796076938,
          "target": "0-helm"
        },
        {
          "yaw": 1.376254211671931,
          "pitch": -0.018471522044769983,
          "rotation": 0,
          "target": "1-bow"
        },
        {
          "yaw": 1.4534913925104016,
          "pitch": 0.13315341176746998,
          "rotation": 3.141592653589793,
          "target": "5-interior---hall"
        },
        {
          "yaw": -2.8765923021560376,
          "pitch": 0.40770793480670164,
          "rotation": 3.141592653589793,
          "target": "4-opening-hull-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-opening-hull-side",
      "name": "Opening Hull Side",
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
        "yaw": 1.690542492860617,
        "pitch": 0.15880058137939557,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 1.9217476272059217,
          "pitch": 0.13929842796690295,
          "rotation": 3.141592653589793,
          "target": "2-cockpit"
        },
        {
          "yaw": 2.5374045263236447,
          "pitch": 0.049047292376648954,
          "rotation": 3.141592653589793,
          "target": "0-helm"
        },
        {
          "yaw": 2.2999546628574814,
          "pitch": -0.0003679818181225869,
          "rotation": 1.5707963267948966,
          "target": "1-bow"
        },
        {
          "yaw": 2.297533244874768,
          "pitch": 0.08919552863888569,
          "rotation": 3.141592653589793,
          "target": "5-interior---hall"
        },
        {
          "yaw": 1.2744957050333277,
          "pitch": 0.3992192274101818,
          "rotation": 3.141592653589793,
          "target": "3-aft-deck"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-interior---hall",
      "name": "Interior - Hall",
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
        "yaw": 1.575877765019973,
        "pitch": 0.7346803945063982,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 3.1402378532756456,
          "pitch": 0.4382222930155404,
          "rotation": 6.283185307179586,
          "target": "7-interior---head"
        },
        {
          "yaw": -2.0776119778375346,
          "pitch": 0.5824504437242091,
          "rotation": 9.42477796076938,
          "target": "8-interior---mid-berth"
        },
        {
          "yaw": 1.4773003105244342,
          "pitch": 0.544520394044671,
          "rotation": 3.141592653589793,
          "target": "6-interior---fwd-seating"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-interior---fwd-seating",
      "name": "Interior - Fwd Seating",
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
        "yaw": 2.2529246939446432,
        "pitch": 0.5085749053878423,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 2.6083376778990726,
          "pitch": 0.6348057826057403,
          "rotation": 3.141592653589793,
          "target": "5-interior---hall"
        },
        {
          "yaw": 2.177969758794587,
          "pitch": 0.11514280766164298,
          "rotation": 4.71238898038469,
          "target": "7-interior---head"
        },
        {
          "yaw": 2.3536686136190514,
          "pitch": 0.35693075877958336,
          "rotation": 3.141592653589793,
          "target": "8-interior---mid-berth"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-interior---head",
      "name": "Interior - Head",
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
        "yaw": 0.521510168070801,
        "pitch": 0.528822298368194,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 2.81056132165068,
          "pitch": 0.35725196175269325,
          "rotation": 3.141592653589793,
          "target": "5-interior---hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-interior---mid-berth",
      "name": "Interior - Mid Berth",
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
        "yaw": 2.2744794368831798,
        "pitch": 0.09589892520793519,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 2.1691896604460155,
          "pitch": 0.0361253435502249,
          "rotation": 3.141592653589793,
          "target": "5-interior---hall"
        },
        {
          "yaw": 2.400655633336031,
          "pitch": -0.27457885261392256,
          "rotation": 1.5707963267948966,
          "target": "7-interior---head"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "20240814 FireFly Walkthrough",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
