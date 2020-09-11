import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../Constant';
const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height
const styles = StyleSheet.create({
    AuthenticationHeaderContainer: {
        position: "absolute",
        top: 0,
        alignSelf: "center"
    },
    AuthenticationHeaderTitle: {
        color: Colors.white,
        fontSize: 18,
        fontFamily: "ArbFONTS-Montserrat-Arabic-SemiBold",
        position: "absolute",
        top: "10%"
    },
    LinearGradient: {
        alignItems: 'center',
        width: SCREEN_WIDTH
    },
    AuthenticationHeaderImage: {
        marginTop: SCREEN_HEIGHT / 10
    },
    ButtonContainer: {
        width: SCREEN_WIDTH / 1.1,
        paddingVertical: "5%",
        alignItems: "center",
        borderRadius: 10,
        marginVertical: "2%",
    },
    ButtonTitle: {
        fontSize: 15,
        fontFamily: "ArbFONTS-Montserrat-Arabic-Regular"
    },
    addSonButton: {
        width: SCREEN_WIDTH / 3.5,
        backgroundColor: Colors.white,
        paddingVertical: "3%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        marginVertical: "2%",
        borderWidth: 1.5,
        marginHorizontal: "1%"
    },
    addSonButtonTitle: {
        fontSize: 15,
        fontFamily: "ArbFONTS-Montserrat-Arabic-Regular"
    },
    Headercontainer: {
        width: SCREEN_WIDTH
    },
    HeaderImageBackground: {
        width: SCREEN_WIDTH,
        height: 150,
        top: "-7%",
        justifyContent: "flex-end"
    },
    Headertitle: {
        color: Colors.white,
        fontSize: 21,
        fontFamily: "ArbFONTS-Montserrat-Arabic-Regular",
        alignSelf: "center",
        marginBottom: "5%"
    },
    HeaderBackButton: {
        position: "absolute",
        right: "5%",
        top: "-15%"
    },
    myStarStyle: {
        color: 'yellow',
        backgroundColor: 'transparent',
        fontSize: 15
    },
    myEmptyStarStyle: {
        color: Colors.semiGray + 50
    },
    centerTitle: {
        color: Colors.primary,
        fontSize: 10,
        fontFamily: "ArbFONTS-Montserrat-Arabic-Medium",
        marginVertical: 3,
        textAlign: "center"
    },
    centerContainer: {
        height: "100%",
        marginHorizontal: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    footerContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: Colors.primary,
        paddingVertical: 20,
    },
    thickHeaderImageContainer: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT / 3
    },
    thickHeaderLeftLogo: {
        position: "absolute",
        right: 0,
        top: "3%"
    },
    ThickHeaderAboveTitle: {
        position: "absolute",
        top: "7%",
        alignSelf: "center",
        fontSize: 21,
        color: Colors.white,
        fontFamily: "ArbFONTS-Montserrat-Arabic-Medium"
    },
    thickHeaderMainImage: {
        position: "absolute",
        top: SCREEN_HEIGHT / 7,
        alignSelf: "center",
        width: 200,
        height: 200,
        resizeMode: "contain"
    },
    ThickHeaderTitle: {
        fontSize: 17,
        color: Colors.primary,
        fontFamily: "ArbFONTS-Montserrat-Arabic-SemiBold",
        marginTop: "13%",
        alignSelf: "center",
        width: "50%",
        textAlign: "center"
    },
    ThickHeaderArrow: {
        position: "absolute",
        top: "7%",
        right: "5%",
        height: 30,
        width: 30,
        alignItems: "flex-end",
        justifyContent: "flex-start"
    },
    ThickHeaderSetting: {
        position: "absolute",
        top: "7%",
        left: "5%",
        height: 30,
        width: 30,
        alignItems: "flex-end",
        justifyContent: "flex-start"
    },
    specialistsContainer: {
        flexDirection: "row-reverse",
        alignItems: "center",
        // right: "30%",
        marginVertical: "2%",
        justifyContent: "space-between",
        width: SCREEN_WIDTH
    },
    specialistsContainerAbove: {
        flexDirection: "row-reverse",
        alignItems: "center",
        justifyContent: "center"
    },
    specialistsDetailsContainer: {
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        width: 165,
        // alignSelf: "flex-start"
    },
    specialistsName: {
        fontSize: 10,
        fontFamily: "ArbFONTS-Montserrat-Arabic-Medium"
    },
    specialistsStatusContainer: {
        flexDirection: "row-reverse",
        alignItems: "center",
    },
    speicalistsStatus: {
        marginRight: "25%",
        fontFamily: "ArbFONTS-Montserrat-Arabic-Regular",
        fontSize: 9
    },
    specialistsStatusColor: {
        marginRight: "2%",
        height: 10,
        width: 10,
        borderRadius: 10,
    },
    specialistsJob: {
        fontSize: 8,
        fontFamily: "ArbFONTS-Montserrat-Arabic-Regular"
    },
    specialistsButtonContainer: {
        backgroundColor: Colors.primary,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginLeft: "5%",
        borderRadius: 5
    },
    specialistsButtonText: {
        color: Colors.white,
        fontSize: 12,
        fontFamily: "ArbFONTS-Montserrat-Arabic-Regular"
    },
    RateContainer: {
        marginHorizontal: 10,
        width: SCREEN_WIDTH / 1.7,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        marginVertical: "5%",
        padding: 20,
        borderRadius: 10
    },
    RateDescription: {
        color: Colors.semiGray,
        fontFamily: "ArbFONTS-Montserrat-Arabic-Regular",
        fontSize: 8,
        lineHeight: 20,
        alignSelf: "center",
        textAlign: "center"
    },
    rateImg: {
        position: "absolute",
        top: "-25%",
        alignSelf: "center"
    },
    serviceStar: {
        color: 'yellow',
        backgroundColor: 'transparent',
        fontSize: 25
    },
    emptyServiceStar: {
        color: Colors.semiGray + 50,
    },
    starsSpace: {
        marginVertical: 10
    },
    specialistsModalContainer: {
        width: "90%",
        flexDirection: "row-reverse",
        alignSelf: "center",
        paddingVertical: 10,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: "3%"
    },
    serviceCardContainer: {
        flex: 1,
        alignItems: "center",
        margin: 10
    },
    serviceCardImage: {
        width: SCREEN_WIDTH / 2.2,
        borderRadius: 20,
        height: SCREEN_HEIGHT / 3,
    },
    serviceCardTitle: {
        position: "absolute",
        bottom: "5%",
        alignSelf: "center",
        color: Colors.white,
        fontSize: 9,
        fontFamily: "ArbFONTS-Montserrat-Arabic-Medium",
        width: "70%",
        textAlign: "center"
    },
    textInput: {
        borderBottomColor: Colors.primary + 33,
        borderBottomWidth: 1,
        width: SCREEN_WIDTH / 1.1,
        textAlign: "right",
        fontFamily: "ArbFONTS-Montserrat-Arabic-Medium",
        fontSize: 11
    }
})
export default styles;