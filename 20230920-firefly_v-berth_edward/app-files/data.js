var APP_DATA = {
  "scenes": [
    {
      "id": "0-stand-1",
      "name": "Stand 1",
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
        "yaw": 1.944962429885532,
        "pitch": 0.8151510182805559,
        "fov": 1.352817585576841
      },
      "linkHotspots": [
        {
          "yaw": 1.9548394002578906,
          "pitch": 0.8306695389851413,
          "rotation": 3.141592653589793,
          "target": "1-stand-2"
        },
        {
          "yaw": 1.7044124440799484,
          "pitch": 0.6020570310410545,
          "rotation": 3.141592653589793,
          "target": "2-seated"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-stand-2",
      "name": "Stand 2",
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
        "yaw": 1.7248946696814578,
        "pitch": 0.7377105720752155,
        "fov": 1.352817585576841
      },
      "linkHotspots": [
        {
          "yaw": 1.7248946696814578,
          "pitch": 0.7377105720752155,
          "rotation": 3.141592653589793,
          "target": "0-stand-1"
        },
        {
          "yaw": -1.9712120908029753,
          "pitch": 1.1004275650322874,
          "rotation": 3.141592653589793,
          "target": "2-seated"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-seated",
      "name": "Seated",
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
        "yaw": 1.110697894054253,
        "pitch": 0.300481932886866,
        "fov": 1.352817585576841
      },
      "linkHotspots": [
        {
          "yaw": 1.7381503323310792,
          "pitch": 0.3937424586297187,
          "rotation": 9.42477796076938,
          "target": "0-stand-1"
        },
        {
          "yaw": 0.7999195242850163,
          "pitch": 0.986344519134704,
          "rotation": 9.42477796076938,
          "target": "1-stand-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "20230920 FireFly_V-berth_Edward",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
