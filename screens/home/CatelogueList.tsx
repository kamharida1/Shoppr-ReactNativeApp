import React from 'react'
import { FlatList, ListRenderItem, StyleSheet, View } from 'react-native'
import { ICatelogue } from './../../assets/data/model'
import CatelogueCard from './CatelogueCard'

interface Props {
    catelogues: ICatelogue[]
}

const CatelogueList = ({catelogues}: Props) => {

    const renderCatelogue: ListRenderItem<ICatelogue> = ({ item }) => {
        return <CatelogueCard catelogue={item} />
    }

    return (
        <View style={styles.list}>
            <FlatList                
                showsHorizontalScrollIndicator={false}
                scrollEnabled={true}
                horizontal={true}
                data={catelogues}
                keyExtractor={(item, i) => item.id.toString()}
                renderItem={renderCatelogue}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    list: { 
        marginVertical: 16,
    }
})

export default CatelogueList