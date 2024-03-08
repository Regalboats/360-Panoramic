var APP_DATA = {
  "scenes": [
    {
      "id": "0-walkthrough",
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
        "yaw": 1.475316550068145,
        "pitch": 0.24194867919065643,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 1.4164025686010504,
          "pitch": 0.20830056024366606,
          "rotation": 3.141592653589793,
          "target": "2-cockpit"
        },
        {
          "yaw": 0.673492178571264,
          "pitch": 0.1764309607985748,
          "rotation": 3.141592653589793,
          "target": "1-helm"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-helm",
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
        "yaw": -0.9661395581085532,
        "pitch": 0.13914504554266927,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -1.0696418082512782,
          "pitch": 0.3389786379130104,
          "rotation": 3.141592653589793,
          "target": "2-cockpit"
        },
        {
          "yaw": -1.7689358971974585,
          "pitch": 0.22573025533844948,
          "rotation": 3.141592653589793,
          "target": "4-fhd"
        },
        {
          "yaw": 0.197360138324715,
          "pitch": 0.2795984330986876,
          "rotation": 3.141592653589793,
          "target": "0-walkthrough"
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
        "yaw": 1.0043094381460165,
        "pitch": 0.3896571452377877,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 1.1848061364210185,
          "pitch": 0.07887266636841161,
          "rotation": 3.141592653589793,
          "target": "1-helm"
        },
        {
          "yaw": 0.3964694389987393,
          "pitch": 0.10971055150307052,
          "rotation": 3.141592653589793,
          "target": "0-walkthrough"
        },
        {
          "yaw": 3.071652112919832,
          "pitch": 0.4702774178316229,
          "rotation": 3.141592653589793,
          "target": "4-fhd"
        },
        {
          "yaw": -1.635195672665244,
          "pitch": 0.5338534747804182,
          "rotation": 3.141592653589793,
          "target": "3-aft-portside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-aft-portside",
      "name": "Aft Portside",
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
        "yaw": 1.656400644032825,
        "pitch": 0.12113719031790282,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 1.671873979300826,
          "pitch": 0.02373811488326183,
          "rotation": 3.141592653589793,
          "target": "1-helm"
        },
        {
          "yaw": 1.795343396738212,
          "pitch": 0.5495036316414428,
          "rotation": 3.141592653589793,
          "target": "2-cockpit"
        },
        {
          "yaw": 2.7978105635943473,
          "pitch": 0.3420335822847349,
          "rotation": 3.141592653589793,
          "target": "4-fhd"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-fhd",
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
        "yaw": 1.6151967357879204,
        "pitch": 0.05989862912884547,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.9237741820073442,
          "pitch": 0.2882051477253498,
          "rotation": 3.141592653589793,
          "target": "3-aft-portside"
        },
        {
          "yaw": 1.700881218069087,
          "pitch": 0.31715172048435036,
          "rotation": 3.141592653589793,
          "target": "2-cockpit"
        },
        {
          "yaw": 2.2601204386734874,
          "pitch": 0.014171473579697391,
          "rotation": 3.141592653589793,
          "target": "1-helm"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "20240308 Firefly GA Bravo",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
