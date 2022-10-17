var config = {
    style: 'mapbox://styles/comuni-dados/cl8iwv8uw001q14ppl1wz3n0i',
    accessToken: 'pk.eyJ1IjoiY29tdW5pLWRhZG9zIiwiYSI6ImNqdWxlaHRqbjIycjE0M3BpamY3a3c4aWUifQ.HGizp_QckKQVjAZnnw8qAg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'globe',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    title: '\nAmplifying the voices of the cultural leaders\nin the Rutshuru territory of\nthe Democratic Republic of the Congo',
    subtitle: 'Looking beyond the armed conflict, the struggle for resources, and the fortress conservation, \nthis platform frames the territory from the perspective of its cultural leaders, \nwhose voice is crucial to building a peaceful future and achieving social and ecological justice\n\n',
    byline: 'With contributions from cultural leaders,</br>Environmental and Human Rights defenders from North Kivu Province</br></br>Languages: <a href="index.html" >French</a>, <a href="/" >Swahili</a>, <a href="/" >English</a>',
    footer: '<img src="./images/xr.jpg" width="20">   This project was conceptualised and developed by XR Rutshuru / DRC and its allies',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: ' ',
            image: './images/DRC-Kivu.jpg',
            description: 'The Rutshuro territory of the Democratic Republic of the Congo, formed by the Bwisa and Bwito chiefdoms, stretches between Lakes Edward and Kivu sharing borders with Rwanda and Uganda. This tropical moist broadleaf forest ecoregion, not without difficulties of coexistence, shelters 800.000 among Hutu, Nande, Hunde, Tutsu and Pygmée People.',
            location: {
                center: [29.331751305136, -1.30208414974959],
                zoom: 9.5,
                pitch: 55,
                bearing: 0,
                speed: 2, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'label-nord-kivu',
                    opacity: 1,
                },
                {
                    layer: 'clip-mines-c1wdgx',
                    opacity: 0,
                    //     duration: 5000
                },
                {
                    layer: 'clip-mines-c1wdgx-label',
                    opacity: 0,
                    //     duration: 5000
                },
                {
                    layer: 'petrolier-5s136w',
                    opacity: 0,
                    //     duration: 5000
                },
                {
                    layer: 'armed-5a1k14',
                    opacity: 0,
                    //     duration: 5000
                },
                {
                    layer: 'patrol-posts-7u48y1',
                    opacity: 0,
                    //     duration: 5000
                },
                {
                    layer: 'virunga-75wg20',
                    opacity: 0,
                    //     duration: 5000
                },
                {
                    layer: 'ind-ajidzo',
                    opacity: 0,
                },
                {
                    layer: 'ind-label-7qnf5n',
                    opacity: 0,
                },
            ],
            onChapterExit: [
                {
                    layer: 'clip-mines-c1wdgx',
                    opacity: 1,
                },
                {
                    layer: 'clip-mines-c1wdgx-label',
                    opacity: 1,
                },
                {
                    layer: 'petrolier-5s136w',
                    opacity: 1,
                },
                {
                    layer: 'label-nord-kivu',
                    opacity: 0,
                },
                {
                    layer: 'armed-5a1k14',
                    opacity: 0,
                },
                {
                    layer: 'patrol-posts-7u48y1',
                    opacity: 0,
                },
                {
                    layer: 'virunga-75wg20',
                    opacity: 0,
                },
                {
                    layer: 'ind-ajidzo',
                    opacity: 0,
                },
                {
                    layer: 'ind-label-7qnf5n',
                    opacity: 0,
                },
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'The world recognises us for the abundance of resources from our lands. Europeans, Chinese, North Americans and Australians colonise our mountains, waters and forests exploiting our people in mining and logging.',
            image: '',
            description: 'Video: Ley Uwera <video width="100%" controls><source src="./video/Ley_Uwera_480x852_1437873599503798279.mp4" type="video/mp4" />',
            location: {
                center: [29.02808985099757, -1.1811485557502555],
                zoom: 9,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 2, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'clip-mines-c1wdgx',
                    opacity: 1,
                },
                {
                    layer: 'clip-mines-c1wdgx-label',
                    opacity: 1,
                },
                {
                    layer: 'label-nord-kivu',
                    opacity: 0,
                },
                {
                    layer: 'armed-5a1k14',
                    opacity: 0,
                },
                {
                    layer: 'patrol-posts-7u48y1',
                    opacity: 0,
                },
                {
                    layer: 'virunga-75wg20',
                    opacity: 0,
                },
                {
                    layer: 'ind-ajidzo',
                    opacity: 0,
                },
                {
                    layer: 'ind-label-7qnf5n',
                    opacity: 0,
                },
            ],
            onChapterExit: [
                {
                    layer: 'armed-5a1k14',
                    opacity: 1,
                },
                {
                    layer: 'clip-mines-c1wdgx',
                    opacity: 0,
                },
                {
                    layer: 'clip-mines-c1wdgx-label',
                    opacity: 0,
                },
                {
                    layer: 'petrolier-5s136w',
                    opacity: 0,
                },
                {
                    layer: 'patrol-posts-7u48y1',
                    opacity: 0,
                },
                {
                    layer: 'virunga-75wg20',
                    opacity: 0,
                },
                {
                    layer: 'ind-ajidzo',
                    opacity: 0,
                },
                {
                    layer: 'ind-label-7qnf5n',
                    opacity: 0,
                },
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'right',
            hidden: false,
            title: 'The world recognises us for a prolonged violent conflict between our People, whose cause is attributed to a struggle over resources. But resources are only the pretext for the conflict, fuelled instead by a struggle over power and influence, as well as issues of land access, citizenship and identity.',
            image: './images/160523162718-burnt-house-north-kivu-province-drc.jpg',
            description: 'Image: A burnt hut in a village. Fiston Mahamba',
            location: {
                center: [29.02808985099757, -1.1811485557502555],
                zoom: 9,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'armed-5a1k14',
                    opacity: 1,
                    //duration: 50
                },
                {
                    layer: 'clip-mines-c1wdgx',
                    opacity: 0,
                },
                {
                    layer: 'label-nord-kivu',
                    opacity: 0,
                },
                {
                    layer: 'clip-mines-c1wdgx-label',
                    opacity: 0,
                },
                {
                    layer: 'petrolier-5s136w',
                    opacity: 0,
                },
                {
                    layer: 'patrol-posts-7u48y1',
                    opacity: 0,
                },
                {
                    layer: 'virunga-75wg20',
                    opacity: 0,
                },
                {
                    layer: 'ind-ajidzo',
                    opacity: 0,
                },
                {
                    layer: 'ind-label-7qnf5n',
                    opacity: 0,
                },
            ],
            onChapterExit: [
                {
                    layer: 'armed-5a1k14',
                    opacity: 0,
                },
                {
                    layer: 'clip-mines-c1wdgx',
                    opacity: 0,
                },
                {
                    layer: 'clip-mines-c1wdgx-label',
                    opacity: 0,
                },
                {
                    layer: 'petrolier-5s136w',
                    opacity: 0,
                },
                {
                    layer: 'patrol-posts-7u48y1',
                    opacity: 1,
                },
                {
                    layer: 'virunga-75wg20',
                    opacity: 1,
                },
                {
                    layer: 'ind-ajidzo',
                    opacity: 0,
                },
                {
                    layer: 'ind-label-7qnf5n',
                    opacity: 0,
                },
            ]
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'The world recognises us because in these lands we coexist with over a thousand species of mammals, birds, reptiles and amphibians, and a third of the endangered mountain gorillas. But instead of coexistence, it was preferred to fence off part of the land on which our subsistence depends, calling it Virunga National Park, and have it secured at gunpoint.',
            image: './images/s2HTZQH.jpeg',
            description: 'Image: Former French special forces arms instructor teaches a Virunga park ranger the use of an AK-4.',
            location: {
                center: [29.02808985099757, -1.1811485557502555],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'armed-5a1k14',
                    opacity: 0,
                },
                {
                    layer: 'clip-mines-c1wdgx',
                    opacity: 0,
                },
                {
                    layer: 'clip-mines-c1wdgx-label',
                    opacity: 0,
                },
                {
                    layer: 'petrolier-5s136w',
                    opacity: 0,
                },
                {
                    layer: 'patrol-posts-7u48y1',
                    opacity: 1,
                },
                {
                    layer: 'virunga-75wg20',
                    opacity: 1,
                },
                {
                    layer: 'ind-ajidzo',
                    opacity: 0,
                },
                {
                    layer: 'label-nord-kivu',
                    opacity: 0,
                },
                {
                    layer: 'ind-label-7qnf5n',
                    opacity: 0,
                },               
            ],
            onChapterExit: [
                {
                    layer: 'ind-ajidzo',
                    opacity: 1,
                },
                {
                    layer: 'ind-label-7qnf5n',
                    opacity: 1,
                },
                {
                    layer: 'label-nord-kivu',
                    opacity: 1,
                },
            ]
        },
        {
            id: 'fifth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'We would like the world to recognise the relationship between our bodies, our land and our languages. We would like to share stories to make you understand the challenges we are facing. Let\'s start!',
            image: './images/FdbpdsvWIAAGeua.jpg',
            description: 'Image: XR Rutshuru',
            location: {
                center: [29.331751305136, -1.30208414974959],
                zoom: 9.5,
                pitch: 55,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'story-first-viz',
            onChapterEnter: [
                {
                    layer: 'label-nord-kivu',
                    opacity: 1,
                },
                {
                    layer: 'clip-mines-c1wdgx',
                    opacity: 0,
                },
                {
                    layer: 'clip-mines-c1wdgx-label',
                    opacity: 0,
                },
                {
                    layer: 'petrolier-5s136w',
                    opacity: 0,
                },
                {
                    layer: 'armed-5a1k14',
                    opacity: 0,
                },
                {
                    layer: 'patrol-posts-7u48y1',
                    opacity: 0,
                },
                {
                    layer: 'virunga-75wg20',
                    opacity: 0,
                },
                {
                    layer: 'ind-ajidzo',
                    opacity: 0,
                },
                {
                    layer: 'ind-label-7qnf5n',
                    opacity: 0,
                },
            ],
            onChapterExit: [
                {
                    layer: 'clip-mines-c1wdgx',
                    opacity: 0,
                },
                {
                    layer: 'clip-mines-c1wdgx-label',
                    opacity: 0,
                },
                {
                    layer: 'petrolier-5s136w',
                    opacity: 0,
                },
                {
                    layer: 'label-nord-kivu',
                    opacity: 0,
                },
                {
                    layer: 'armed-5a1k14',
                    opacity: 0,
                },
                {
                    layer: 'patrol-posts-7u48y1',
                    opacity: 0,
                },
                {
                    layer: 'virunga-75wg20',
                    opacity: 0,
                },
                {
                    layer: 'ind-ajidzo',
                    opacity: 0,
                },
                {
                    layer: 'ind-label-7qnf5n',
                    opacity: 0,
                },
            ]
        },
        {
            id: 'sixth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Enter the text of the story here. The location will appear on the map. You can add a photograph or video. Remember to give credit',
            image: './images/Fb0DWpCWQAI3Qkj.jpg',
            description: 'Image/video: ',
            location: {
                center: [29.1778973558354, -1.1868462566597333],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'label-nord-kivu',
                    opacity: 1,
                },
                {
                    layer: 'clip-mines-c1wdgx',
                    opacity: 0,
                },
                {
                    layer: 'clip-mines-c1wdgx-label',
                    opacity: 0,
                },
                {
                    layer: 'petrolier-5s136w',
                    opacity: 0,
                },
                {
                    layer: 'armed-5a1k14',
                    opacity: 0,
                },
                {
                    layer: 'patrol-posts-7u48y1',
                    opacity: 0,
                },
                {
                    layer: 'virunga-75wg20',
                    opacity: 0,
                },
                {
                    layer: 'ind-ajidzo',
                    opacity: 0,
                },
                {
                    layer: 'ind-label-7qnf5n',
                    opacity: 0,
                },
            ],
            onChapterExit: [
                {
                    layer: 'clip-mines-c1wdgx',
                    opacity: 0,
                },
                {
                    layer: 'clip-mines-c1wdgx-label',
                    opacity: 0,
                },
                {
                    layer: 'petrolier-5s136w',
                    opacity: 0,
                },
                {
                    layer: 'label-nord-kivu',
                    opacity: 0,
                },
                {
                    layer: 'armed-5a1k14',
                    opacity: 0,
                },
                {
                    layer: 'patrol-posts-7u48y1',
                    opacity: 0,
                },
                {
                    layer: 'virunga-75wg20',
                    opacity: 0,
                },
                {
                    layer: 'ind-ajidzo',
                    opacity: 0,
                },
                {
                    layer: 'ind-label-7qnf5n',
                    opacity: 0,
                },
            ]
        },
    ]
};
