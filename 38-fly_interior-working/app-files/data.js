var APP_DATA = {
  "scenes": [
    {
      "id": "0-fwd-berth",
      "name": "FWD Berth",
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
        "yaw": 1.5955671742058462,
        "pitch": 0.38686005222899844,
        "fov": 1.4123549197728476
      },
      "linkHotspots": [
        {
          "yaw": -3.1332962068294083,
          "pitch": 0.35698501639399893,
          "rotation": 5.497787143782138,
          "target": "1-head"
        },
        {
          "yaw": -0.22153056605480614,
          "pitch": 0.4780900427047978,
          "rotation": 0.7853981633974483,
          "target": "2-shower"
        },
        {
          "yaw": -1.1405869157587922,
          "pitch": 0.7215745558605544,
          "rotation": 0,
          "target": "3-mid-berth"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-head",
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
        "yaw": 1.5667432097801344,
        "pitch": 0.6575832535997925,
        "fov": 1.4123549197728476
      },
      "linkHotspots": [
        {
          "yaw": -1.9440341842566262,
          "pitch": 0.4730831565393512,
          "rotation": 1.5707963267948966,
          "target": "0-fwd-berth"
        },
        {
          "yaw": -2.300584960307601,
          "pitch": 0.23493508727494827,
          "rotation": 0,
          "target": "2-shower"
        },
        {
          "yaw": -2.61854814532634,
          "pitch": 0.41820031410818004,
          "rotation": 4.71238898038469,
          "target": "3-mid-berth"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-shower",
      "name": "Shower",
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
        "yaw": 1.6859831945307464,
        "pitch": 0.7101375780987649,
        "fov": 1.4123549197728476
      },
      "linkHotspots": [
        {
          "yaw": -1.0948474132770016,
          "pitch": 0.30538343913913835,
          "rotation": 0,
          "target": "1-head"
        },
        {
          "yaw": 0.18614819723340048,
          "pitch": 0.7427639929724474,
          "rotation": 0.7853981633974483,
          "target": "3-mid-berth"
        },
        {
          "yaw": -1.7767584737245254,
          "pitch": 0.692444758310323,
          "rotation": 5.497787143782138,
          "target": "0-fwd-berth"
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
        "yaw": 1.6258304735830826,
        "pitch": 0.42899117766943284,
        "fov": 1.4123549197728476
      },
      "linkHotspots": [
        {
          "yaw": -0.4563177162404166,
          "pitch": 0.11722219186917293,
          "rotation": 0,
          "target": "0-fwd-berth"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "38 FLY_INTERIOR-working",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
