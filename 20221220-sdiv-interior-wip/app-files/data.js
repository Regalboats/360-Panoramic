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
        "yaw": -1.9593852935933356,
        "pitch": 0.6089910467380282,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": 0.07232020855175847,
          "pitch": 0.7051214368452214,
          "rotation": 0.7853981633974483,
          "target": "3-mid-berth"
        },
        {
          "yaw": -0.9116411928709134,
          "pitch": 0.3247530222650781,
          "rotation": 0,
          "target": "2-head--shower"
        },
        {
          "yaw": -2.3559110036775355,
          "pitch": 0.4839073345347735,
          "rotation": 3.141592653589793,
          "target": "1-fwd-berth_seated"
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
        "yaw": 1.5182576618271089,
        "pitch": 0.13426356533368633,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": 2.2388014438359782,
          "pitch": 0.1956691709744085,
          "rotation": 3.141592653589793,
          "target": "0-fwd-berth"
        },
        {
          "yaw": 1.8183413866847769,
          "pitch": 0.25434447856215314,
          "rotation": 0,
          "target": "3-mid-berth"
        },
        {
          "yaw": 1.6649587623183582,
          "pitch": -0.0038061763913077584,
          "rotation": 4.71238898038469,
          "target": "2-head--shower"
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
        "yaw": 1.6446362165981698,
        "pitch": 0.8641265167684171,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": -0.7235626678907057,
          "pitch": 0.8336771001114904,
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
        "yaw": 1.178250538672092,
        "pitch": 0.3840567744969867,
        "fov": 1.4175088064025105
      },
      "linkHotspots": [
        {
          "yaw": 1.793527135709212,
          "pitch": 0.016170025127163257,
          "rotation": 3.141592653589793,
          "target": "0-fwd-berth"
        },
        {
          "yaw": 2.0681325307786107,
          "pitch": 0.008239207590873932,
          "rotation": 7.853981633974483,
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
