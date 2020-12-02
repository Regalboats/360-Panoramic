var APP_DATA = {
  "scenes": [
    {
      "id": "0-profile",
      "name": "PROFILE",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 1.5687189171576712,
        "pitch": 0.10225094070186103,
        "fov": 1.4256478217424775
      },
      "linkHotspots": [
        {
          "yaw": 1.2358919092324676,
          "pitch": 0.030359294760330613,
          "rotation": 7.853981633974483,
          "target": "1-transom"
        },
        {
          "yaw": 1.4608298909415467,
          "pitch": -0.16311914792334115,
          "rotation": 3.141592653589793,
          "target": "2-fly"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-transom",
      "name": "TRANSOM",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 1.2733995246612064,
        "pitch": 0.22399345863280118,
        "fov": 1.4256478217424775
      },
      "linkHotspots": [
        {
          "yaw": 1.9135622486226973,
          "pitch": -0.40309009517627103,
          "rotation": 5.497787143782138,
          "target": "2-fly"
        },
        {
          "yaw": 2.551646728253349,
          "pitch": 0.18788392111333785,
          "rotation": 30.630528372500507,
          "target": "0-profile"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-fly",
      "name": "FLY",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 1.5460709391096419,
        "pitch": 0.3524329347431703,
        "fov": 1.4256478217424775
      },
      "linkHotspots": [
        {
          "yaw": -3.040729182968338,
          "pitch": 1.002405465934114,
          "rotation": 14.922565104551524,
          "target": "1-transom"
        },
        {
          "yaw": 2.892473327729121,
          "pitch": 0.3752947100779327,
          "rotation": 0,
          "target": "0-profile"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "38 FLY - R6",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
