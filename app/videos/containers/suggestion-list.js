import React, { Component } from 'react';
import {
  FlatList,
  Text
} from 'react-native';
import Layout from 'app/videos/components/suggestion-list-layout';
import Empty from 'app/videos/components/empty';
import Separator from 'app/sections/components/vertical-separator';
import Suggestion from 'app/videos/components/suggestion';

class SuggestionList extends Component {
  renderEmpty   = () => <Empty text="No hay sugerencias" />
  itemSeparator = () => <Separator />
  renderItem    = ({item}) => <Suggestion {...item} />
  keyExtractor  = ({id}) => `${id}`

  render () {
    const { list } = this.props;
    return (
      <Layout title="Recomendado para ti">
        <FlatList
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          data={list}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      </Layout>
    )
  }
}

export default SuggestionList;
