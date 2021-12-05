import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
  },
  header: {
    height: 80,
    width: '100%',
    backgroundColor: 'rgb(255, 255, 255)',
    alignItems: 'stretch',
    justifyContent: 'center',
    zIndex: 1,
  },
  text: {
    fontSize: 30,
    color: '#fff',
  },
  list: {
    backgroundColor: 'rgb(240, 240, 240)',
    paddingVertical: 14,
  },
  item: {
    paddingVertical: 14,
    marginVertical: 10,
    zIndex: 1,
  },
  itemText: {
    color: 'rgb(0, 0, 0)',
    fontSize: 20,
    letterSpacing: 2,
    fontWeight: 'bold',
    paddingTop: 12,
  },
  likeText: {
    color: 'rgb(255, 100, 0)',
    fontWeight: '600',
    fontSize: 16,
    letterSpacing: 2,
  },
  itemImage: {
    height: 400,
    width: '100%',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    paddingHorizontal: 10,
  },
  infoText: {
    fontSize: 12,
    color: 'rgb(255, 100, 0)',
    fontWeight: '900',
    letterSpacing: 0.2,
    lineHeight: 12,
    textAlign: 'center',
    zIndex: 2,
    alignSelf: 'center',
    position: 'absolute',
    bottom: -24,
  },
  overlayLottie: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(240, 240, 240, 0.4)',
  },
});
