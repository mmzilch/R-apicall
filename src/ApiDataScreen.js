import React, { useEffect, useState } from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ApiDataScreen = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/users')//from "https://jsonplaceholder.typicode.com/guide/"
            .then((response) => response.json())//string to json format
            .then(json => {
                console.log('Api data: ', json
                );
                setData(json);
                setLoading(false);
            })
    }, [])

    if (loading) {
        return (
            < View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ marginBottom: hp(2) }}>Please wait ...</Text>
                <ActivityIndicator size='large' color='#fff123' />
            </View >
        )

    }

    return (//jsx//{} is js code
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {data && data.length > 0 && data.map(item => <Text key={item.id}>{item.name}</Text>)}

            < Text > Api Data Screen </Text>

        </View >
    )
}

export default ApiDataScreen;
