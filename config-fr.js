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
    title: '\nAmplifier la voix des leaders culturels\ndans le territoire de Rutshuru de la\nRépublique démocratique du Congo',
    subtitle: 'Dépassant le conflit armé, la lutte pour les ressources et la militarisation de la conservation, \ncette plateforme présente le territoire du point de vue de ses leaders culturels, \ndont la voix est cruciale pour construire un avenir pacifique et réaliser la justice sociale et écologique\n\n',
    byline: 'Avec la contribution de leaders culturels,</br>de défenseurs et défenseures de l\'environnement et des droits de l\'homme de la province du Nord-Kivu</br></br>Langues: <a href="fr.html" >Français</a>, <a href="sw.html" >Swahili</a>, <a href="index.html" >Anglais</a>',
    footer: '<img src="./images/xr.jpg" width="20">   Ce projet a été conceptualisé et développé par XR Rutshuru / RDC et ses alliés.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: ' ',
            image: './images/DRC-Kivu.jpg',
            description: 'Le territoire Rutshuro de la République démocratique du Congo, formé par les chefferies Bwisa et Bwito, s\'étend entre les lacs Edward et Kivu et partage des frontières avec le Rwanda et l\'Ouganda. Cette écorégion de forêt humide tropicale à larges feuilles, non sans connaître des difficultés de coexistence, abrite 800.000 personnes parmi les peuples Hutu, Nande, Hunde, Tutsu et Pygmée.',
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
            title: 'Le monde nous reconnaît pour l\'abondance des ressources de nos terres. Les Européens, les Chinois, les Nord-Américains et les Australiens colonisent nos montagnes, nos eaux et nos forêts en exploitant nos populations dans les domaines minier et forestier.',
            image: '',
            description: 'Vidéo: Ley Uwera <video width="100%" controls><source src="./video/Ley_Uwera_480x852_1437873599503798279.mp4" type="video/mp4" />',
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
            title: 'Le monde nous reconnaît pour un conflit violent et prolongé entre nos peuples, dont la cause est attribuée à une lutte pour les ressources. Mais les ressources ne sont que le prétexte du conflit, alimenté au contraire par une guerre de pouvoir et d\'influence, ainsi que par des questions d\'accès à la terre, de citoyenneté et d\'identité.',
            image: './images/160523162718-burnt-house-north-kivu-province-drc.jpg',
            description: 'Photo: Une hutte incendiée dans un village. Fiston Mahamba',
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
            title: 'Le monde nous reconnaît parce que sur ces terres, nous coexistons avec plus d\'un millier d\'espèces de mammifères, d\'oiseaux, de reptiles et d\'amphibiens, ainsi qu\'avec un tiers des gorilles de montagne, une espèce menacée. Mais au lieu de la coexistence, on a préféré délimiter une partie des terres dont dépend notre subsistance, en l\'appelant Parc national des Virunga, et en la sécurisant sous la menace d\'une arme.',
            image: './images/s2HTZQH.jpeg',
            description: 'Photo: Un instructeur des forces spéciales françaises montre à un garde forestier du parc des Virunga comment se servir d\'un AK-4.',
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
            title: 'Nous aimerions que le monde reconnaisse la relation entre nos corps, notre terre et nos langues. Nous aimerions partager des histoires pour vous permettre de comprendre les défis auxquels nous sommes confrontés. Allons-y !',
            image: './images/FdbpdsvWIAAGeua.jpg',
            description: 'Photo: XR Rutshuru',
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
            title: 'Entrez le texte de l\'histoire ici. La localisation apparaîtra sur la carte. Vous pouvez ajouter une photo ou une vidéo. N\'oubliez pas d\'indiquer le crédit',
            image: './images/Fb0DWpCWQAI3Qkj.jpg',
            description: 'Photo/vidéo: ',
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
