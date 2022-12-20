var APP_DATA = {
  "scenes": [
    {
      "id": "0-fwd-berth",
      "name": "Fwd Berth",
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
        "yaw": 0.9411740573688796,
        "pitch": 0.5920844456469041,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": 0.7226226510184386,
          "pitch": 0.5187541068179122,
          "rotation": 3.141592653589793,
          "target": "1-fwd-berth_seated"
        },
        {
          "yaw": 2.3756530143702683,
          "pitch": 0.4827937274424716,
          "rotation": 0,
          "target": "2-head--shower"
        },
        {
          "yaw": -2.9658708557251785,
          "pitch": 0.7527994616406133,
          "rotation": 0,
          "target": "3-mid-berth"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-fwd-berth_seated",
      "name": "Fwd Berth_seated",
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
        "yaw": 1.4156485108838712,
        "pitch": 0.061980105331070234,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": 1.9464839264652154,
          "pitch": 0.3471163550582972,
          "rotation": 3.141592653589793,
          "target": "0-fwd-berth"
        },
        {
          "yaw": 1.4493897638115012,
          "pitch": 0.01880865726553793,
          "rotation": 4.71238898038469,
          "target": "2-head--shower"
        },
        {
          "yaw": 1.5848405691045606,
          "pitch": 0.2468203706579004,
          "rotation": 0,
          "target": "3-mid-berth"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-head--shower",
      "name": "Head & Shower",
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
        "yaw": 2.2103418488022886,
        "pitch": 0.8789224114222804,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": -0.36156872464308876,
          "pitch": 0.6843777293027333,
          "rotation": 0,
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
        "yaw": 1.7425258649423139,
        "pitch": 0.4420065864443483,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": 2.3844472438368243,
          "pitch": 0.1320736005879546,
          "rotation": 3.141592653589793,
          "target": "0-fwd-berth"
        },
        {
          "yaw": 2.6909980033729077,
          "pitch": -0.04209161172155973,
          "rotation": 1.5707963267948966,
          "target": "2-head--shower"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "20221220 SDIV Interior WIP",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
