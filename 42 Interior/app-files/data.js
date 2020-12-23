var APP_DATA = {
  "scenes": [
    {
      "id": "0-master-berth",
      "name": "Master Berth",
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
        "yaw": 1.6870827609810286,
        "pitch": 0.6864343066496481,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -2.973604934658308,
          "pitch": 0.9781479920228477,
          "rotation": 0.7853981633974483,
          "target": "2-head-a"
        },
        {
          "yaw": -0.8252483969167841,
          "pitch": 0.9541317564806242,
          "rotation": 0,
          "target": "1-refreshment"
        },
        {
          "yaw": -1.2171381868527185,
          "pitch": 0.7028252248696454,
          "rotation": 0,
          "target": "3-aft-berth"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-refreshment",
      "name": "Refreshment",
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
        "yaw": -2.8301712324353225,
        "pitch": 0.4439326898497562,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.1690498626258865,
          "pitch": 0.7919594749754815,
          "rotation": 5.497787143782138,
          "target": "3-aft-berth"
        },
        {
          "yaw": -1.0077961729381961,
          "pitch": 1.0144811322266225,
          "rotation": 0,
          "target": "0-master-berth"
        },
        {
          "yaw": 0.1154389655791821,
          "pitch": 0.9417296098735637,
          "rotation": 0,
          "target": "2-head-a"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-head-a",
      "name": "Head A",
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
        "yaw": 2.089660708591124,
        "pitch": 0.6761490049487726,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -1.6615965326818305,
          "pitch": 0.9653710511463576,
          "rotation": 0,
          "target": "1-refreshment"
        },
        {
          "yaw": -0.19488962472347637,
          "pitch": 0.8551007510926496,
          "rotation": 0,
          "target": "0-master-berth"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-aft-berth",
      "name": "Aft Berth",
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
        "yaw": 2.0413806719698115,
        "pitch": 0.33166457904340163,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -0.12640139130213868,
          "pitch": 0.37172144924649153,
          "rotation": 0,
          "target": "1-refreshment"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "42 Interior Concept",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
