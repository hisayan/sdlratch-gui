import { defineMessages } from 'react-intl';
import sharedMessages from '../shared-messages';

let messages = defineMessages({
    bark: {
        defaultMessage: 'Bark',
        description: 'Name for the bark sound',
        id: 'gui.defaultProject.bark'
    },
    variable: {
        defaultMessage: 'my variable',
        description: 'Name for the default variable',
        id: 'gui.defaultProject.variable'
    }
});

messages = { ...messages, ...sharedMessages };

// use the default message if a translation function is not passed
const defaultTranslator = msgObj => msgObj.defaultMessage;

/**
 * Generate a localized version of the default project
 * @param {function} translateFunction a function to use for translating the default names
 * @return {object} the project data json for the default project
 */
const projectData = translateFunction => {
    const translator = translateFunction || defaultTranslator;
    return ({
        targets: [
            {
                isStage: true,
                name: 'Stage',
                variables: {
                    '`jEk@4|i[#Fk?(8x)AV.-my variable': [
                        translator(messages.variable),
                        0
                    ]
                },
                lists: {},
                broadcasts: {},
                blocks: {},
                currentCostume: 0,
                costumes: [
                    {
                        assetId: 'cd21514d0531fdffb22204e0ec5ed84a',
                        name: translator(messages.backdrop, { index: 1 }),
                        md5ext: 'cd21514d0531fdffb22204e0ec5ed84a.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 240,
                        rotationCenterY: 180
                    }
                ],
                sounds: [
                    {
                        assetId: '83a9787d4cb6f3b7632b4ddfebf74367',
                        name: translator(messages.pop),
                        dataFormat: 'wav',
                        format: '',
                        rate: 11025,
                        sampleCount: 258,
                        md5ext: '83a9787d4cb6f3b7632b4ddfebf74367.wav'
                    }
                ],
                volume: 100
            },
            {
                isStage: false,
                name: translator(messages.sprite, { index: 1 }),
                variables: {},
                lists: {},
                broadcasts: {},
                blocks: {},
                currentCostume: 0,
                costumes: [
                    {
                        assetId: '106461f60e34ce231b323e2dd2d9f05b',
                        name: 'dot-a',
                        bitmapResolution: 1,
                        md5ext: '106461f60e34ce231b323e2dd2d9f05b.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 52,
                        rotationCenterY: 67
                    },
                    {
                        assetId: '21482022f9930400302bc8ec70643717',
                        name: 'dot-b',
                        bitmapResolution: 1,
                        md5ext: '21482022f9930400302bc8ec70643717.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 65,
                        rotationCenterY: 67
                    },
                    {
                        assetId: '9e5a6cc6970ce4932a09affba70a45b0',
                        name: 'dot-c',
                        bitmapResolution: 1,
                        md5ext: '9e5a6cc6970ce4932a09affba70a45b0.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 50.53907324990831,
                        rotationCenterY: 68.96764494984302
                    },
                    {
                        assetId: 'fb047c94113ee4c6664305a338525e6a',
                        name: 'dot-d',
                        bitmapResolution: 1,
                        md5ext: 'fb047c94113ee4c6664305a338525e6a.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 56.58074394930321,
                        rotationCenterY: 66.76919584395038
                    }
                ],
                sounds: [
                    {
                        assetId: 'cd8fa8390b0efdd281882533fbfcfcfb',
                        name: translator(messages.bark),
                        dataFormat: 'wav',
                        format: '',
                        rate: 22050,
                        sampleCount: 18688,
                        md5ext: 'cd8fa8390b0efdd281882533fbfcfcfb.wav'
                    }
                ],
                volume: 100,
                visible: true,
                x: 0,
                y: 0,
                size: 100,
                direction: 90,
                draggable: false,
                rotationStyle: 'all around'
            }
        ],
        // extensions: ['smartdevicelink'], // ここじゃないぽい
        meta: {
            semver: '3.0.0',
            vm: '0.1.0',
            agent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36' // eslint-disable-line max-len
        }
    });
};


export default projectData;
